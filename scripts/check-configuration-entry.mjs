#!/usr/bin/env node
// Verifies the built `@durion-sdk/<pkg>/configuration` secondary entry point.
//
// Each generated package must ship exactly one Configuration class and one
// BASE_PATH token, both in the secondary entry. If a file in the primary entry
// reaches a support file by relative path instead of by package name, ng-packagr
// compiles a second copy into the primary bundle. Nothing fails at build or run
// time: the app provides a Configuration the services never inject, and every
// request silently goes to the generated default basePath. This check turns
// that into a failed pack.
//
// Usage:
//   node scripts/check-configuration-entry.mjs                         # every built generated package
//   node scripts/check-configuration-entry.mjs packages/sdk-location   # only these package dirs
//
// Run it after a build: it reads <package>/dist.

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..');
const DUPLICATE_MARKERS = [
  { label: 'class Configuration', pattern: /\bclass Configuration\b/ },
  { label: "new InjectionToken('basePath')", pattern: /new InjectionToken\(\s*['"]basePath['"]/ },
];

function generatedPackageDirs() {
  const packagesDir = join(repoRoot, 'packages');
  return readdirSync(packagesDir)
    .filter((name) => name.startsWith('sdk-') && name !== 'sdk-transport')
    .map((name) => join(packagesDir, name))
    .filter((dir) => existsSync(join(dir, 'ng-package.json')));
}

function fesmFile(distDir, packageName, subpath = '') {
  const base = packageName.replace(/^@/, '').replace(/\//g, '-');
  return join(distDir, 'fesm2022', `${base}${subpath ? `-${subpath}` : ''}.mjs`);
}

function checkPackage(packageDir) {
  const errors = [];
  const distDir = join(packageDir, 'dist');
  const manifestPath = join(distDir, 'package.json');
  if (!existsSync(manifestPath)) {
    return [`${packageDir}: no dist/package.json; build the package first`];
  }

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const name = manifest.name;
  const entry = `${name}/configuration`;

  if (!manifest.exports?.['./configuration']) {
    errors.push(`${name}: dist/package.json does not export ./configuration`);
  }

  const primaryPath = fesmFile(distDir, name);
  const secondaryPath = fesmFile(distDir, name, 'configuration');
  for (const file of [primaryPath, secondaryPath]) {
    if (!existsSync(file)) {
      errors.push(`${name}: missing ${file}`);
    }
  }
  if (errors.length > 0) {
    return errors;
  }

  const primary = readFileSync(primaryPath, 'utf8');
  const secondary = readFileSync(secondaryPath, 'utf8');

  for (const { label, pattern } of DUPLICATE_MARKERS) {
    if (pattern.test(primary)) {
      errors.push(
        `${name}: primary bundle defines ${label}; a file in the primary entry imports a support file by relative path instead of '${entry}'`,
      );
    }
    if (!pattern.test(secondary)) {
      errors.push(`${name}: ${entry} bundle does not define ${label}`);
    }
  }

  if (!primary.includes(`from '${entry}'`)) {
    errors.push(`${name}: primary bundle does not import from '${entry}'`);
  }

  return errors;
}

const requested = process.argv.slice(2).map((dir) => resolve(repoRoot, dir));
const packageDirs = requested.length > 0 ? requested : generatedPackageDirs();
const errors = packageDirs.flatMap(checkPackage);

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`[check-configuration-entry] ${error}`);
  }
  process.exit(1);
}

console.log(`[check-configuration-entry] ${packageDirs.length} package(s) ship a single Configuration and BASE_PATH in /configuration`);
