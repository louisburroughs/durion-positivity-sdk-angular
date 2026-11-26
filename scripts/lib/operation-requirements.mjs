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
//   x-required-permissions-conditional:
//                                the subset the caller can be let through
//                                without: asked for on some calls only, as in
//                                `a and (#param == null or b)` or
//                                `b or @selfCheck.isSelf(#id)`. Absent means none.
//   x-permission-conditions:     the checks the service makes beyond the
//                                authorization expression, each with a key the
//                                frontend names (backend #4067, the
//                                @PermissionCondition annotation). A list of
//                                { key, permission, kind, when, fields? }, kind
//                                one of REQUIRED_WHEN (some calls are refused
//                                without the code), WAIVES (a holder skips a
//                                step) or FIELDS (some response fields are
//                                served only to holders; `fields` names them).
//                                Absent means none.
//
//   allOf       = x-required-permissions-all
//   conditional = x-required-permissions-conditional - allOf
//   anyOf       = x-required-permissions - allOf - conditional - the sentinel
//   conditions  = x-permission-conditions by key: { code, kind, fields }
//   permitted   = holds every allOf code AND (anyOf is empty OR holds one of them)
//
// A conditional code is never demanded: the backend serves some caller who does
// not hold it. A permitted caller can still get a 403 on a call that needs one.
// Nor is a condition: `conditions` names the codes, so a page can gate the one
// control (REQUIRED_WHEN, WAIVES) or section (FIELDS) that depends on each.
//
// An operation with no x-required-permissions has unknown requirements. It gets
// no entry in the map, and consumers must refuse a missing entry (fail closed).

export const AUTHENTICATED_SENTINEL = 'AUTHENTICATED';
export const REQUIRED_EXTENSION = 'x-required-permissions';
export const REQUIRED_ALL_EXTENSION = 'x-required-permissions-all';
export const REQUIRED_CONDITIONAL_EXTENSION = 'x-required-permissions-conditional';
export const CONDITIONS_EXTENSION = 'x-permission-conditions';

/** The spec's condition kinds, and the name each has in the generated map. */
export const CONDITION_KINDS = Object.freeze({ REQUIRED_WHEN: 'requiredWhen', WAIVES: 'waives', FIELDS: 'fields' });

/** The pattern the backend's @PermissionCondition key must match (lowerCamel, 2-40 characters). */
const CONDITION_KEY_PATTERN = /^[a-z][A-Za-z0-9]{1,39}$/;
const CONDITION_PROPERTIES = new Set(['key', 'permission', 'kind', 'when', 'fields']);

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

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== '';
}

/**
 * The operation's x-permission-conditions as a map by key, in declaration
 * order, checked by the rules the backend's customizer enforces (a malformed
 * list throws rather than being guessed at):
 *   - the extension is a list of objects with only key, permission, kind, when
 *     and fields;
 *   - key matches ^[a-z][A-Za-z0-9]{1,39}$ and is unique on the operation;
 *   - permission and when are non-empty strings, kind is a known kind;
 *   - fields is a non-empty list of non-empty strings for FIELDS, absent or
 *     empty for every other kind;
 *   - a REQUIRED_WHEN code is not one `allOf` already requires on every call.
 * Absent means none: `{}`.
 */
export function conditionsFor(operation, allOf = [], where = 'operation') {
  const value = operation[CONDITIONS_EXTENSION];
  if (value === undefined || value === null) return {};
  const fail = (reason) => new Error(`${where}: ${CONDITIONS_EXTENSION} ${reason}`);
  if (!Array.isArray(value)) throw fail('must be a list');

  const required = new Set(allOf);
  const conditions = {};
  value.forEach((entry, index) => {
    const at = (reason) => fail(`[${index}]: ${reason}`);
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw at('must be an object');
    const unknown = Object.keys(entry).filter((name) => !CONDITION_PROPERTIES.has(name));
    if (unknown.length > 0) throw at(`has unknown field(s) ${unknown.join(', ')}`);

    const { key, permission, kind, when, fields } = entry;
    if (typeof key !== 'string' || !CONDITION_KEY_PATTERN.test(key)) {
      throw at(`key must match ${CONDITION_KEY_PATTERN.source}`);
    }
    if (Object.hasOwn(conditions, key)) throw at(`key "${key}" repeats on the operation`);
    if (!isNonEmptyString(permission)) throw at(`"${key}": permission must be a non-empty string`);
    if (!Object.hasOwn(CONDITION_KINDS, kind)) {
      throw at(`"${key}": kind must be one of ${Object.keys(CONDITION_KINDS).join(', ')}`);
    }
    if (!isNonEmptyString(when)) throw at(`"${key}": when must be a non-empty string`);
    if (fields !== undefined && fields !== null && (!Array.isArray(fields) || !fields.every(isNonEmptyString))) {
      throw at(`"${key}": fields must be a list of non-empty strings`);
    }
    const fieldList = (fields ?? []).map((field) => field.trim());
    if (kind === 'FIELDS' && fieldList.length === 0) throw at(`"${key}": a FIELDS condition names no fields`);
    if (kind !== 'FIELDS' && fieldList.length > 0) throw at(`"${key}": fields are only for a FIELDS condition`);
    const code = permission.trim();
    if (kind === 'REQUIRED_WHEN' && required.has(code)) {
      throw at(`"${key}": ${code} is already required on every call (x-required-permissions-all)`);
    }

    conditions[key] = { code, kind: CONDITION_KINDS[kind], fields: fieldList };
  });
  return conditions;
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
 *
 * A code in `-conditional` is never demanded, unless `-all` requires it too.
 * The codes in neither list are alternatives (`anyOf`). `conditions` is
 * `x-permission-conditions` by key (`{}` when absent); it is read, and checked,
 * even on an operation with no requirement, so a malformed list always fails.
 */
export function requirementFor(operation, where = 'operation') {
  const all = readCodeList(operation, REQUIRED_ALL_EXTENSION, where) ?? [];
  const named = readCodeList(operation, REQUIRED_EXTENSION, where) ?? [];
  const onCondition = readCodeList(operation, REQUIRED_CONDITIONAL_EXTENSION, where) ?? [];
  const codes = [...named, ...all, ...onCondition];
  const allOf = sortedUnique(all.filter((code) => code !== AUTHENTICATED_SENTINEL));
  const conditions = conditionsFor(operation, allOf, where);
  if (codes.length === 0) return undefined;

  const required = new Set(allOf);
  const conditional = sortedUnique(
    onCondition.filter((code) => code !== AUTHENTICATED_SENTINEL && !required.has(code)),
  );
  const optional = new Set(conditional);
  const anyOf = sortedUnique(
    named.filter((code) => code !== AUTHENTICATED_SENTINEL && !required.has(code) && !optional.has(code)),
  );

  return { anyOf, allOf, conditional, authenticated: codes.includes(AUTHENTICATED_SENTINEL), conditions };
}

/**
 * Every operation of a parsed OpenAPI document, keyed by generated method name.
 *
 * @returns {{
 *   operationIds: string[],
 *   requirements: Record<string, {anyOf: string[], allOf: string[], conditional: string[], authenticated: boolean,
 *     conditions: Record<string, {code: string, kind: 'requiredWhen' | 'waives' | 'fields', fields: string[]}>}>,
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

/** `{}`, or one `key: { code, kind, fields }` per condition in declaration order. Keys match a safe identifier pattern. */
function renderConditions(conditions) {
  const entries = Object.entries(conditions ?? {});
  if (entries.length === 0) return '{}';
  const body = entries
    .map(([key, c]) => `${key}: { code: ${quote(c.code)}, kind: ${quote(c.kind)}, fields: ${renderList(c.fields)} }`)
    .join(', ');
  return `{ ${body} }`;
}

/** The TypeScript source of `packages/sdk-<module>/requirements/operation-requirements.ts`. */
export function renderOperationRequirementsModule({ moduleName, specLabel, operationIds, requirements, missing }) {
  const idType = `${toTypePrefix(moduleName)}OperationId`;
  const union = operationIds.length === 0 ? ' never' : `\n${operationIds.map((id) => `  | ${quote(id)}`).join('\n')}`;
  const entries = Object.entries(requirements)
    .map(
      ([id, r]) =>
        `  ${id}: { anyOf: ${renderList(r.anyOf)}, allOf: ${renderList(r.allOf)}, conditional: ${renderList(r.conditional)}, authenticated: ${r.authenticated}, conditions: ${renderConditions(r.conditions)} },`,
    )
    .join('\n');
  const missingList = missing.length === 0 ? '[]' : `[\n${missing.map((id) => `  ${quote(id)},`).join('\n')}\n]`;

  return `// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-operation-requirements.mjs (part of \`npm run generate\`)
// from the x-required-permissions and x-permission-conditions extensions of ${specLabel}.

/**
 * One permission check the operation makes beyond its authorization
 * expression, by the key the spec gives it. The same shape as
 * \`OperationCondition\` in @durion-sdk/transport, which documents it.
 */
export interface OperationCondition {
  readonly code: string;
  readonly kind: 'requiredWhen' | 'waives' | 'fields';
  readonly fields: readonly string[];
}

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
  readonly conditional: readonly string[];
  readonly authenticated: boolean;
  readonly conditions: Readonly<Record<string, OperationCondition>>;
}

/** Every operation of @durion-sdk/${moduleName}, by the name of its generated service method. */
export type ${idType} =${union};

/**
 * What a caller must hold to call each operation: every \`allOf\` code and, when
 * \`anyOf\` is not empty, at least one \`anyOf\` code. A \`conditional\` code is
 * asked for on some calls only and is never demanded here, nor is a code in
 * \`conditions\`, which names each such check by key. An operation with no
 * entry has unknown requirements and must be refused (fail closed);
 * \`isOperationPermitted\` from @durion-sdk/transport applies these rules.
 */
export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<${idType}, OperationRequirement>>> = {
${entries}${entries ? '\n' : ''}};

/** Operations whose spec declares no requirement, so they have no entry above. */
export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly ${idType}[] = ${missingList};
`;
}
