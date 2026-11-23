#!/usr/bin/env node
// Writes each generated package's `@durion-sdk/<pkg>/requirements` entry point:
// OPERATION_REQUIREMENTS, the map from operation to the permissions a caller
// must hold, read from the x-required-permissions extensions of the same spec
// file openapitools.json gives the client generator (ADR-0079 section 8).
//
// `npm run generate` runs this after the clients are generated. On its own:
//   node scripts/generate-operation-requirements.mjs                    # every package
//   node scripts/generate-operation-requirements.mjs --module workorder # one package
//
// An operation with no x-required-permissions has unknown requirements: it is
// left out of the map (consumers refuse a missing entry) and listed in a
// warning here. Rules and rendering: scripts/lib/operation-requirements.mjs.

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { ensureExport, writeSecondaryEntry } from './lib/entry-point.mjs';
import { collectOperationRequirements, renderOperationRequirementsModule } from './lib/operation-requirements.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ENTRY_DIR = 'requirements';

function fail(message) {
  console.error(`[requirements] ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  let moduleName = '';
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--module' && argv[i + 1]) {
      moduleName = argv[i + 1];
      i += 1;
    } else {
      fail(`Unknown argument: ${argv[i]}`);
    }
  }
  return { moduleName };
}

/** Method names of the generated services, or `null` when the package has no clients yet. */
function generatedMethodNames(packageDir) {
  const apisDir = join(packageDir, 'src', 'apis');
  if (!existsSync(apisDir)) return null;
  const names = new Set();
  for (const file of readdirSync(apisDir).filter((name) => name.endsWith('.ts'))) {
    for (const match of readFileSync(join(apisDir, file), 'utf8').matchAll(/^\s+public (\w+)\(/gm)) {
      names.add(match[1]);
    }
  }
  return names;
}

const { moduleName: onlyModule } = parseArgs(process.argv.slice(2));
const generators = JSON.parse(readFileSync(join(repoRoot, 'openapitools.json'), 'utf8'))['generator-cli'].generators;
const keys = Object.keys(generators).filter((key) => !onlyModule || key === `sdk-${onlyModule}`);
if (keys.length === 0) fail(`No generator "sdk-${onlyModule}" in openapitools.json`);

const totals = { packages: 0, operations: 0, mapped: 0, missing: 0, authenticatedOnly: 0 };
const warnings = [];
const problems = [];

for (const key of keys) {
  const generator = generators[key];
  const moduleName = key.replace(/^sdk-/, '');
  const packageDir = join(repoRoot, generator.output);
  const specPath = resolve(repoRoot, generator.inputSpec);
  const specLabel = relative(resolve(repoRoot, '..'), specPath).split('\\').join('/');
  if (!existsSync(specPath)) fail(`${key}: spec not found at ${specPath}`);

  let result;
  try {
    result = collectOperationRequirements(yaml.load(readFileSync(specPath, 'utf8')), specLabel);
  } catch (error) {
    fail(error.message);
  }

  const methods = generatedMethodNames(packageDir);
  if (methods) {
    const unknown = result.operationIds.filter((id) => !methods.has(id));
    if (unknown.length > 0) {
      problems.push(`${key}: no generated service method for ${unknown.join(', ')}`);
    }
  }

  writeSecondaryEntry(packageDir, ENTRY_DIR, {
    'operation-requirements': renderOperationRequirementsModule({ moduleName, specLabel, ...result }),
  });
  ensureExport(join(packageDir, 'index.ts'), `${generator.additionalProperties.npmName}/${ENTRY_DIR}`);
  ensureExport(join(packageDir, 'src', 'index.ts'), `${generator.additionalProperties.npmName}/${ENTRY_DIR}`);

  totals.packages += 1;
  totals.operations += result.operationIds.length;
  totals.mapped += Object.keys(result.requirements).length;
  totals.missing += result.missing.length;
  totals.authenticatedOnly += result.authenticatedOnly.length;
  if (result.missing.length > 0) {
    warnings.push(`${key} (${specLabel}): ${result.missing.join(', ')}`);
  }
}

console.log(
  `[requirements] ${totals.packages} package(s), ${totals.operations} operation(s): ${totals.mapped} mapped ` +
    `(${totals.authenticatedOnly} open to any signed-in caller), ${totals.missing} with no x-required-permissions.`,
);
if (warnings.length > 0) {
  const annotate = process.env.GITHUB_ACTIONS === 'true';
  console.warn(
    `${annotate ? '::warning::' : ''}[requirements] ${totals.missing} operation(s) declare no x-required-permissions. ` +
      'They have no OPERATION_REQUIREMENTS entry, so consumers refuse them (fail closed):',
  );
  for (const line of warnings) console.warn(`[requirements]   ${line}`);
}
if (problems.length > 0) {
  // A key no service method carries cannot be referenced by a caller: the
  // method-name rule in scripts/lib/operation-requirements.mjs has drifted
  // from the client generator's.
  fail(`Operation keys do not match the generated services:\n  ${problems.join('\n  ')}`);
}
