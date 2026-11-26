// The capability catalog (ADR-0079 section 2): the named, holdable bundles of
// permissions a role is made of, read from the backend's
// pos-security-service/src/main/resources/capabilities/*.yaml. Pure functions
// only, so the Jest suite can load this file; the command line, which reads and
// YAML-parses the files, is scripts/generate-capability-catalog.mjs.
//
// The rules mirror the backend loader, CapabilityCatalog.java
// (pos-security-service/.../internal/domain/), so a catalog this accepts is one
// the security service starts with, and one it refuses fails here first.

import { createHash } from 'node:crypto';

const KEY = /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/;
const MAX_KEY_LENGTH = 120;
const MAX_NAME_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH = 500;
const FIELDS = new Set(['key', 'name', 'description', 'tenantWideOnly', 'system', 'hierarchy', 'includes', 'permissions']);
const HIERARCHIES = new Set(['FINANCIAL', 'OTHER']);

/**
 * The catalog files among `fileNames`, in the order the loader reads them:
 * every `*.yaml` whose name does not start with an underscore, by name. The
 * underscore files hold the internal permission list (`_internal-*.yaml`) and
 * the starter roles (`_starter-roles.yaml`), which are not capabilities.
 */
export function catalogFileNames(fileNames) {
  return fileNames.filter((name) => name.endsWith('.yaml') && !name.startsWith('_')).sort(compare);
}

function compare(a, b) {
  if (a < b) return -1;
  return a > b ? 1 : 0;
}

function isBlank(value) {
  return value.trim() === '';
}

function text(where, entry, field, maxLength) {
  const value = entry[field];
  if (typeof value !== 'string' || isBlank(value)) {
    throw new Error(`${where}: ${field} must be a non-blank string`);
  }
  const trimmed = value.trim();
  if (trimmed.length > maxLength) {
    throw new Error(`${where}: ${field} is longer than ${maxLength} characters`);
  }
  return trimmed;
}

function strings(where, entry, field) {
  const value = entry[field];
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) throw new Error(`${where}: ${field} must be a list`);
  const result = new Set();
  for (const item of value) {
    if (typeof item !== 'string' || isBlank(item)) {
      throw new Error(`${where}: ${field} must hold non-blank strings`);
    }
    const trimmed = item.trim();
    if (result.has(trimmed)) throw new Error(`${where}: ${field} lists '${trimmed}' twice`);
    result.add(trimmed);
  }
  return [...result].sort(compare);
}

function isMapping(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date);
}

function toEntry(where, area, entry) {
  for (const field of Object.keys(entry)) {
    if (!FIELDS.has(field)) throw new Error(`${where}: unknown field '${field}'`);
  }
  const key = text(where, entry, 'key', MAX_KEY_LENGTH);
  if (!KEY.test(key)) throw new Error(`${where}: key '${key}' is not a dotted lower-case key`);
  const at = `${where} (${key})`;
  const name = text(at, entry, 'name', MAX_NAME_LENGTH);
  const description = text(at, entry, 'description', MAX_DESCRIPTION_LENGTH);
  if (typeof entry.tenantWideOnly !== 'boolean') throw new Error(`${at}: tenantWideOnly must be true or false`);
  if (entry.system !== undefined && entry.system !== null && typeof entry.system !== 'boolean') {
    throw new Error(`${at}: system must be true or false`);
  }
  if (!HIERARCHIES.has(entry.hierarchy)) throw new Error(`${at}: hierarchy must be FINANCIAL or OTHER`);
  const includes = strings(at, entry, 'includes');
  const permissions = strings(at, entry, 'permissions');
  if (includes.includes(key)) throw new Error(`${at}: a capability cannot include itself`);
  if (includes.length === 0 && permissions.length === 0) {
    throw new Error(`${at}: grants nothing; give it permissions or includes`);
  }
  return {
    key,
    name,
    description,
    area,
    includes,
    permissions,
    tenantWideOnly: entry.tenantWideOnly,
    hierarchy: entry.hierarchy,
    system: entry.system === true,
  };
}

/**
 * Validates parsed catalog files and returns the catalog.
 *
 * @param files `[fileName, parsedYaml]` pairs, read in the order given (use
 *   catalogFileNames for the loader's order). A file's stem is its entries' `area`.
 * @returns {{ version: string, capabilities: object[] }} every capability, in key
 *   order, and a content hash of them as the version
 * @throws a file is not a list of mappings, an entry is malformed, a key repeats,
 *   or an include does not resolve to a capability on the same side of the
 *   system boundary that itself includes nothing
 */
export function parseCapabilityCatalog(files) {
  const byKey = new Map();
  for (const [file, root] of files) {
    const area = file.replace(/\.yaml$/, '');
    if (!Array.isArray(root)) throw new Error(`${file}: expected a list of capabilities at the top level`);
    root.forEach((raw, index) => {
      const where = `${file} entry ${index + 1}`;
      if (!isMapping(raw)) throw new Error(`${where}: expected a mapping`);
      const entry = toEntry(where, area, raw);
      if (byKey.has(entry.key)) {
        throw new Error(`${file}: capability key '${entry.key}' is declared more than once`);
      }
      byKey.set(entry.key, entry);
    });
  }
  for (const entry of byKey.values()) {
    for (const included of entry.includes) {
      const target = byKey.get(included);
      if (target === undefined) {
        throw new Error(`capability '${entry.key}' includes '${included}', which is not in the catalog`);
      }
      if (target.system !== entry.system) {
        throw new Error(
          `capability '${entry.key}' includes '${included}' across the system boundary; a system capability ` +
            'and an ordinary one cannot include each other',
        );
      }
      if (target.includes.length > 0) {
        throw new Error(
          `capability '${entry.key}' includes '${included}', which has includes of its own; includes go one level only`,
        );
      }
    }
  }
  const capabilities = [...byKey.values()].sort((a, b) => compare(a.key, b.key));
  return { version: catalogVersion(capabilities), capabilities };
}

/**
 * A content hash of the catalog: the first 16 hex digits of the SHA-256 of its
 * entries as JSON. The backend gives the catalog no version number, so this
 * changes exactly when an entry does, and never on a comment or file reordering.
 */
export function catalogVersion(capabilities) {
  return createHash('sha256').update(JSON.stringify(capabilities)).digest('hex').slice(0, 16);
}

function quote(value) {
  const escaped = value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `'${escaped}'`;
}

function renderList(values) {
  return values.length === 0 ? '[]' : `[${values.map(quote).join(', ')}]`;
}

function renderEntry(entry) {
  return `  {
    key: ${quote(entry.key)},
    name: ${quote(entry.name)},
    description: ${quote(entry.description)},
    area: ${quote(entry.area)},
    includes: ${renderList(entry.includes)},
    permissions: ${renderList(entry.permissions)},
    tenantWideOnly: ${entry.tenantWideOnly},
    hierarchy: ${quote(entry.hierarchy)},
    system: ${entry.system},
  },`;
}

/** The TypeScript source of `packages/sdk-security/capability-catalog/capability-catalog.ts`. */
export function renderCapabilityCatalogModule({ version, capabilities }) {
  const body = capabilities.length === 0 ? '[]' : `[\n${capabilities.map(renderEntry).join('\n')}\n]`;
  return `// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-capability-catalog.mjs (part of \`npm run generate\`).
//
// Mirrors the backend's capability catalog (ADR-0079 section 2): every
// capabilities/*.yaml of pos-security-service whose name does not start with an
// underscore, validated by the rules of its loader, CapabilityCatalog.java.
// The underscore files (the internal permission lists and the starter roles)
// hold no capabilities and are not here.
//
// Source of truth: durion-positivity-backend
//   pos-security-service/src/main/resources/capabilities/*.yaml

/** Which pos-location parent chain a location-scoped holder's reach follows (ADR-0061 section 2). */
export type CapabilityCatalogHierarchy = 'FINANCIAL' | 'OTHER';

/** One capability as the backend catalog declares it. */
export interface CapabilityCatalogEntry {
  /** Dotted lower-case key; a role names its capabilities by key. */
  readonly key: string;
  readonly name: string;
  readonly description: string;
  /** The catalog file it is declared in, without \`.yaml\` (\`service\`, \`finance\`, \`platform\`, ...). */
  readonly area: string;
  /** Keys of the capabilities it carries with it, one level deep, sorted. */
  readonly includes: readonly string[];
  /** The permission codes it grants by itself, sorted; the includes add theirs. */
  readonly permissions: readonly string[];
  /** Holdable only on a tenant-wide assignment, never at a location. */
  readonly tenantWideOnly: boolean;
  readonly hierarchy: CapabilityCatalogHierarchy;
  /** A system capability: held only by a system role, never listed for a tenant's roles. */
  readonly system: boolean;
}

/** Content hash of CAPABILITY_CATALOG; changes exactly when an entry does. */
export const CAPABILITY_CATALOG_VERSION = ${quote(version)};

/** Every capability, in key order. */
export const CAPABILITY_CATALOG: readonly CapabilityCatalogEntry[] = ${body};
`;
}
