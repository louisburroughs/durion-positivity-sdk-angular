// Operation requirements: what a caller must hold to be allowed to call an
// operation, read from the backend's OpenAPI specs (ADR-0079 section 8).
//
// Pure functions only, so the Jest suite can load this file; the command line
// around them is scripts/generate-operation-requirements.mjs.
//
// The contract, per operation:
//   x-required-permissions:      every permission code the operation's
//                                authorization expression names. The single
//                                value AUTHENTICATED is a sentinel: any
//                                signed-in caller, no permission.
//   x-required-permissions-all:  the subset of those codes that are each
//                                required. Absent means none.
//
//   allOf = x-required-permissions-all
//   anyOf = x-required-permissions - allOf - the sentinel
//   permitted = holds every allOf code AND (anyOf is empty OR holds one of them)
//
// An operation with no x-required-permissions has unknown requirements. It gets
// no entry in the map, and consumers must refuse a missing entry (fail closed).

export const AUTHENTICATED_SENTINEL = 'AUTHENTICATED';
export const REQUIRED_EXTENSION = 'x-required-permissions';
export const REQUIRED_ALL_EXTENSION = 'x-required-permissions-all';

const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'];

function compareCodeUnits(a, b) {
  if (a < b) return -1;
  return a > b ? 1 : 0;
}

/** Sorted, de-duplicated copy. Code-unit order, so the output does not depend on the locale. */
function sortedUnique(values) {
  return [...new Set(values)].sort(compareCodeUnits);
}

function readCodeList(operation, extension, where) {
  const value = operation[extension];
  if (value === undefined || value === null) return undefined;
  if (!Array.isArray(value) || value.some((code) => typeof code !== 'string' || code.trim() === '')) {
    throw new Error(`${where}: ${extension} must be a list of non-empty strings`);
  }
  return value.map((code) => code.trim());
}

/**
 * The name the typescript-angular generator gives the service method of an
 * operation: the operationId with every character outside [A-Za-z0-9_] turned
 * into `_`, camel-cased on `_`, first letter lowered. `getAuditTrailByOrder_1`
 * becomes `getAuditTrailByOrder1`. The map is keyed by this name because it is
 * what a caller writes; scripts/generate-operation-requirements.mjs checks every
 * key against the generated services.
 */
export function toMethodName(operationId) {
  const camel = String(operationId)
    .replace(/[^A-Za-z0-9_]/g, '_')
    .replace(/_+([A-Za-z0-9])/g, (_match, next) => next.toUpperCase())
    .replace(/_+$/g, '');
  return camel.charAt(0).toLowerCase() + camel.slice(1);
}

/**
 * The requirement of one operation object, or `undefined` when the operation
 * declares none (unknown: leave it out of the map).
 *
 * An empty `x-required-permissions` list says nothing about who may call, so it
 * is unknown too. `x-required-permissions-all` without `x-required-permissions`
 * is read as that list alone. A code named only in `-all` is still required:
 * the stricter reading is the safe one.
 */
export function requirementFor(operation, where = 'operation') {
  const all = readCodeList(operation, REQUIRED_ALL_EXTENSION, where) ?? [];
  const named = readCodeList(operation, REQUIRED_EXTENSION, where) ?? [];
  const codes = [...named, ...all];
  if (codes.length === 0) return undefined;

  const allOf = sortedUnique(all.filter((code) => code !== AUTHENTICATED_SENTINEL));
  const required = new Set(allOf);
  const anyOf = sortedUnique(named.filter((code) => code !== AUTHENTICATED_SENTINEL && !required.has(code)));

  return { anyOf, allOf, authenticated: codes.includes(AUTHENTICATED_SENTINEL) };
}

/**
 * Every operation of a parsed OpenAPI document, keyed by generated method name.
 *
 * @returns {{
 *   operationIds: string[],
 *   requirements: Record<string, {anyOf: string[], allOf: string[], authenticated: boolean}>,
 *   missing: string[],
 *   authenticatedOnly: string[],
 * }} `operationIds` is every operation, `missing` those with no requirement
 *   declared, `authenticatedOnly` those open to any signed-in caller. All sorted.
 */
export function collectOperationRequirements(spec, label = 'spec') {
  const seen = new Map();
  const requirements = {};
  const missing = [];
  const authenticatedOnly = [];

  for (const [path, item] of Object.entries(spec?.paths ?? {})) {
    for (const method of HTTP_METHODS) {
      const operation = item?.[method];
      if (!operation || typeof operation !== 'object') continue;

      const where = `${label}: ${method.toUpperCase()} ${path}`;
      if (typeof operation.operationId !== 'string' || operation.operationId === '') {
        throw new Error(`${where}: operation has no operationId, so it cannot be keyed`);
      }
      const name = toMethodName(operation.operationId);
      if (seen.has(name)) {
        throw new Error(`${where}: operation "${name}" is also ${seen.get(name)}; keys must be unique`);
      }
      seen.set(name, `${method.toUpperCase()} ${path}`);

      const requirement = requirementFor(operation, where);
      if (!requirement) {
        missing.push(name);
        continue;
      }
      requirements[name] = requirement;
      if (requirement.authenticated && requirement.anyOf.length === 0 && requirement.allOf.length === 0) {
        authenticatedOnly.push(name);
      }
    }
  }

  const operationIds = [...seen.keys()].sort(compareCodeUnits);
  return {
    operationIds,
    requirements: Object.fromEntries(operationIds.filter((id) => id in requirements).map((id) => [id, requirements[id]])),
    missing: missing.sort(compareCodeUnits),
    authenticatedOnly: authenticatedOnly.sort(compareCodeUnits),
  };
}

/** `people-contact` -> `PeopleContact`: the prefix of a package's operation id type. */
export function toTypePrefix(moduleName) {
  return String(moduleName)
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function quote(value) {
  return `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function renderList(values) {
  return `[${values.map(quote).join(', ')}]`;
}

/** The TypeScript source of `packages/sdk-<module>/requirements/operation-requirements.ts`. */
export function renderOperationRequirementsModule({ moduleName, specLabel, operationIds, requirements, missing }) {
  const idType = `${toTypePrefix(moduleName)}OperationId`;
  const union = operationIds.length === 0 ? ' never' : `\n${operationIds.map((id) => `  | ${quote(id)}`).join('\n')}`;
  const entries = Object.entries(requirements)
    .map(
      ([id, r]) =>
        `  ${id}: { anyOf: ${renderList(r.anyOf)}, allOf: ${renderList(r.allOf)}, authenticated: ${r.authenticated} },`,
    )
    .join('\n');
  const missingList = missing.length === 0 ? '[]' : `[\n${missing.map((id) => `  ${quote(id)},`).join('\n')}\n]`;

  return `// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of \`npm run generate\`)
// from the x-required-permissions extensions of ${specLabel}.

/**
 * What a caller must hold to call one operation. The same shape as
 * \`OperationRequirement\` in @durion-sdk/transport, which documents it and
 * evaluates it (\`isOperationPermitted\`). Declared here as well because a
 * generated package cannot import another workspace package at build time; the
 * two are interchangeable.
 */
export interface OperationRequirement {
  readonly anyOf: readonly string[];
  readonly allOf: readonly string[];
  readonly authenticated: boolean;
}

/** Every operation of @durion-sdk/${moduleName}, by the name of its generated service method. */
export type ${idType} =${union};

/**
 * What a caller must hold to call each operation: every \`allOf\` code and, when
 * \`anyOf\` is not empty, at least one \`anyOf\` code. An operation with no entry
 * has unknown requirements and must be refused (fail closed);
 * \`isOperationPermitted\` from @durion-sdk/transport applies both rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<${idType}, OperationRequirement>>> = {
${entries}${entries ? '\n' : ''}};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly ${idType}[] = ${missingList};
`;
}
