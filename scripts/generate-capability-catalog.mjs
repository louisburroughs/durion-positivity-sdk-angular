#!/usr/bin/env node
// Writes the `@durion-sdk/security/capability-catalog` entry point:
// CAPABILITY_CATALOG_VERSION and CAPABILITY_CATALOG, the capability catalog of
// ADR-0079 section 2, read from the backend's
// pos-security-service/src/main/resources/capabilities/*.yaml. The frontend's
// build-time access checks read it; GET /v1/capabilities serves only what a
// tenant may hold, so the whole catalog is read from the source and shipped
// with the SDK.
//
// `npm run generate` runs this after the permission catalog. On its own:
//   node scripts/generate-capability-catalog.mjs [path-to-backend-repo]
//
// Backend checkout, first that is set: DURION_BACKEND_PATH, the argument, the
// checkout openapitools.json reads the security spec from
// (../durion-positivity-backend).
//
// When that checkout has no capabilities/ folder (a spec-only checkout), the
// committed catalog is kept and a warning says so. Set
// DURION_CAPABILITY_CATALOG_REQUIRED=true to make that an error instead.

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { ensureExport, writeSecondaryEntry } from './lib/entry-point.mjs';
import { catalogFileNames, parseCapabilityCatalog, renderCapabilityCatalogModule } from './lib/capability-catalog.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRY_DIR = 'capability-catalog';
const CATALOG_RELATIVE_PATH = join('pos-security-service', 'src', 'main', 'resources', 'capabilities');

function fail(message) {
  console.error(`[capability-catalog] ${message}`);
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
const catalogDir = join(backendRoot, CATALOG_RELATIVE_PATH);
const outputPath = join(packageDir, ENTRY_DIR, 'capability-catalog.ts');
const fileNames = existsSync(catalogDir) ? catalogFileNames(readdirSync(catalogDir)) : [];

if (fileNames.length > 0) {
  let catalog;
  try {
    catalog = parseCapabilityCatalog(
      fileNames.map((name) => {
        const path = join(catalogDir, name);
        try {
          return [name, yaml.load(readFileSync(path, 'utf8'))];
        } catch (error) {
          throw new Error(`${name}: not valid YAML: ${error.message}`);
        }
      }),
    );
  } catch (error) {
    fail(`${error.message} (${catalogDir})`);
  }
  writeSecondaryEntry(packageDir, ENTRY_DIR, { 'capability-catalog': renderCapabilityCatalogModule(catalog) });
  const system = catalog.capabilities.filter((capability) => capability.system).length;
  console.log(
    `[capability-catalog] ${catalog.capabilities.length} capabilities (${system} system) from ` +
      `${fileNames.length} files, catalog version ${catalog.version}.`,
  );
} else {
  const hint = 'Pass the backend repo path as the argument or set DURION_BACKEND_PATH.';
  if (process.env.DURION_CAPABILITY_CATALOG_REQUIRED === 'true' || !existsSync(outputPath)) {
    fail(`No capability catalog file found in ${catalogDir}. ${hint}`);
  }
  console.warn(
    `${process.env.GITHUB_ACTIONS === 'true' ? '::warning::' : ''}[capability-catalog] No capability catalog file ` +
      `found in ${catalogDir}; keeping the committed catalog, which may be older than the backend's. ${hint}`,
  );
}

ensureExport(join(packageDir, 'index.ts'), `${npmName}/${ENTRY_DIR}`);
ensureExport(join(packageDir, 'src', 'index.ts'), `${npmName}/${ENTRY_DIR}`);
