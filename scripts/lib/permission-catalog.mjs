// The permission bit catalog: which permission code each bit of the JWT
// `perm_bits` claim stands for (ADR-0040), read from the backend's
// `PermissionCode` enum. Pure functions only, so the Jest suite can load this
// file; the command line is scripts/generate-permission-catalog.mjs.

// Enum constants look like:  ACCOUNTING__JE__VIEW(0, "accounting:je:view"),
const CONSTANT = /^\s{4}[A-Za-z0-9_]+\(\s*(\d+)\s*,\s*"([^"]+)"\s*\)/;

/**
 * Parses `PermissionCode.java`.
 *
 * Bit indexes are permanent: a retired permission keeps its index and is marked
 * `@Deprecated`, so it stays in `byBit` and is also listed in `deprecated`. A
 * hole in the indexes, or one index used twice, means the enum no longer
 * follows that rule, and decoding with a guessed table would hand out the wrong
 * permissions, so both are errors.
 *
 * @returns {{ version: number, byBit: string[], deprecated: string[] }}
 */
export function parsePermissionCatalog(source) {
  const versionMatch = /CATALOG_VERSION\s*=\s*(\d+)/.exec(source);
  if (!versionMatch) throw new Error('Could not find CATALOG_VERSION in PermissionCode.java');

  const byBit = [];
  const deprecated = [];
  let pendingDeprecated = false;
  for (const line of source.split('\n')) {
    if (line.trim() === '@Deprecated' || line.trim().startsWith('@Deprecated(')) {
      pendingDeprecated = true;
      continue;
    }
    const match = CONSTANT.exec(line);
    if (!match) continue;
    const bitIndex = Number(match[1]);
    const code = match[2];
    if (byBit[bitIndex] !== undefined) {
      throw new Error(`Duplicate bit index ${bitIndex}: ${byBit[bitIndex]} and ${code}`);
    }
    byBit[bitIndex] = code;
    if (pendingDeprecated) deprecated.push(code);
    pendingDeprecated = false;
  }
  if (byBit.length === 0) throw new Error('No permission constants parsed; the enum format may have changed');

  const missing = [];
  for (let i = 0; i < byBit.length; i += 1) {
    if (byBit[i] === undefined) missing.push(i);
  }
  if (missing.length > 0) throw new Error(`Bit indexes are not contiguous; missing: ${missing.join(', ')}`);

  return { version: Number(versionMatch[1]), byBit, deprecated };
}

function renderCodes(codes) {
  return codes.length === 0 ? '[]' : `[\n${codes.map((code) => `  '${code}',`).join('\n')}\n]`;
}

/** The TypeScript source of `packages/sdk-security/permission-catalog/permission-catalog.ts`. */
export function renderPermissionCatalogModule({ version, byBit, deprecated }) {
  return `// GENERATED FILE - do not edit by hand.
// Written by scripts/generate-permission-catalog.mjs (part of \`npm run generate\`).
//
// Mirrors the backend's \`PermissionCode\` enum (pos-security-service), which
// assigns each permission code a permanent bit index. Those indexes are the
// encoding of the JWT \`perm_bits\` claim (ADR-0040) and are never reused or
// renumbered: a retired permission keeps its index and is marked deprecated on
// the backend. That permanence is what lets a client decode a token issued
// under a different catalog version than the one shipped here.
//
// Source of truth: durion-positivity-backend
//   pos-security-service/.../enums/PermissionCode.java

/** Backend \`PermissionCode.CATALOG_VERSION\` this file was generated from. */
export const PERMISSION_CATALOG_VERSION = ${version};

/**
 * Permission code by \`perm_bits\` bit index. The array index IS the bit index.
 */
export const PERMISSION_BY_BIT: readonly string[] = ${renderCodes(byBit)};

/**
 * The codes above that the backend has retired (\`@Deprecated\`). They keep
 * their bit index, so they stay in PERMISSION_BY_BIT.
 */
export const DEPRECATED_PERMISSIONS: readonly string[] = ${renderCodes(deprecated)};
`;
}
