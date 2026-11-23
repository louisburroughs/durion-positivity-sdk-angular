#!/usr/bin/env node
// Writes the `@durion-sdk/security/permission-catalog` entry point:
// PERMISSION_CATALOG_VERSION and PERMISSION_BY_BIT, the bit index -> permission
// code table of the JWT `perm_bits` claim (ADR-0040), read from the backend's
// `PermissionCode` enum. No endpoint returns the whole catalog, so it is read
// from the source and shipped with the SDK.
//
// `npm run generate` runs this after the clients are generated. On its own:
//   node scripts/generate-permission-catalog.mjs [path-to-backend-repo]
//
// Backend checkout, first that is set: DURION_BACKEND_PATH, the argument, the
// checkout openapitools.json reads the security spec from
// (../durion-positivity-backend).
//
// When that checkout has no PermissionCode.java (a spec-only checkout), the
// committed catalog is kept and a warning says so. Set
// DURION_PERMISSION_CATALOG_REQUIRED=true to make that an error instead.

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ensureExport, writeSecondaryEntry } from './lib/entry-point.mjs';
import { parsePermissionCatalog, renderPermissionCatalogModule } from './lib/permission-catalog.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRY_DIR = 'permission-catalog';
const ENUM_RELATIVE_PATH = join(
  'pos-security-service', 'src', 'main', 'java', 'com', 'positivity',
  'securityservice', 'internal', 'enums', 'PermissionCode.java',
);

function fail(message) {
  console.error(`[permission-catalog] ${message}`);
  process.exit(1);
}

const generator = JSON.parse(readFileSync(join(repoRoot, 'openapitools.json'), 'utf8'))['generator-cli'].generators[
  'sdk-security'
];
const packageDir = join(repoRoot, generator.output);
const npmName = generator.additionalProperties.npmName;
const backendRoot = resolve(
  process.env.DURION_BACKEND_PATH ?? process.argv[2] ?? resolve(repoRoot, dirname(generator.inputSpec), '..'),
);
const enumPath = join(backendRoot, ENUM_RELATIVE_PATH);
const outputPath = join(packageDir, ENTRY_DIR, 'permission-catalog.ts');

if (existsSync(enumPath)) {
  let catalog;
  try {
    catalog = parsePermissionCatalog(readFileSync(enumPath, 'utf8'));
  } catch (error) {
    fail(`${error.message} (${enumPath})`);
  }
  writeSecondaryEntry(packageDir, ENTRY_DIR, { 'permission-catalog': renderPermissionCatalogModule(catalog) });
  console.log(
    `[permission-catalog] ${catalog.byBit.length} permission codes (${catalog.deprecated.length} deprecated), ` +
      `catalog version ${catalog.version}.`,
  );
} else {
  const hint = 'Pass the backend repo path as the argument or set DURION_BACKEND_PATH.';
  if (process.env.DURION_PERMISSION_CATALOG_REQUIRED === 'true' || !existsSync(outputPath)) {
    fail(`PermissionCode.java not found at ${enumPath}. ${hint}`);
  }
  console.warn(
    `${process.env.GITHUB_ACTIONS === 'true' ? '::warning::' : ''}[permission-catalog] PermissionCode.java not found at ` +
      `${enumPath}; keeping the committed catalog, which may be older than the backend's. ${hint}`,
  );
}

ensureExport(join(packageDir, 'index.ts'), `${npmName}/${ENTRY_DIR}`);
ensureExport(join(packageDir, 'src', 'index.ts'), `${npmName}/${ENTRY_DIR}`);
