#!/usr/bin/env node
// Single source of truth for the repo-wide SDK version.
//
// Every workspace package, the root manifest, the lock file and the
// openapi-generator `npmVersion` values are kept on one version so a
// regeneration never resurrects a stale number.
//
// Usage:
//   node scripts/version.mjs current            # print the current version
//   node scripts/version.mjs next               # print what a minor bump would produce
//   node scripts/version.mjs bump [--dry-run]   # minor bump (patch reset, prerelease kept)
//   node scripts/version.mjs set <v> [--dry-run] # explicit version (used for major bumps)
//
// Major versions are deliberately not automated: bump them with
// `npm run version:set -- <major>.0.0`.

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packagesDir = join(repoRoot, 'packages');
const SEMVER = /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+([0-9A-Za-z.-]+))?$/;

function fail(message) {
	console.error(`[version] ${message}`);
	process.exit(2);
}

function readJson(path) {
	const raw = readFileSync(path, 'utf8');
	return { data: JSON.parse(raw), trailingNewline: raw.endsWith('\n') };
}

function writeJson(path, data, trailingNewline) {
	writeFileSync(path, JSON.stringify(data, null, 2) + (trailingNewline ? '\n' : ''));
}

function parseVersion(version) {
	const match = SEMVER.exec(version);
	if (!match) {
		fail(`'${version}' is not a semantic version (expected MAJOR.MINOR.PATCH[-prerelease][+build])`);
	}
	const [, major, minor, patch, prerelease, build] = match;
	return {
		major: Number(major),
		minor: Number(minor),
		patch: Number(patch),
		prerelease,
		build,
	};
}

function formatVersion({ major, minor, patch, prerelease, build }) {
	let version = `${major}.${minor}.${patch}`;
	if (prerelease) version += `-${prerelease}`;
	if (build) version += `+${build}`;
	return version;
}

// Minor bump only: major stays put and is changed by hand. The prerelease
// channel (e.g. `-alpha`) rides along so 0.1.0-alpha -> 0.2.0-alpha.
function nextMinor(version) {
	const parsed = parseVersion(version);
	return formatVersion({ ...parsed, minor: parsed.minor + 1, patch: 0 });
}

function currentVersion() {
	return readJson(join(repoRoot, 'package.json')).data.version;
}

function workspacePackageJsonPaths() {
	if (!existsSync(packagesDir)) return [];
	return readdirSync(packagesDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => join(packagesDir, entry.name, 'package.json'))
		.filter((path) => existsSync(path))
		.sort();
}

function updateRootPackage(version, changes) {
	const path = join(repoRoot, 'package.json');
	const { data, trailingNewline } = readJson(path);
	if (data.version !== version) {
		data.version = version;
		changes.push('package.json');
	}
	writeJson(path, data, trailingNewline);
}

function updateWorkspacePackages(version, changes) {
	for (const path of workspacePackageJsonPaths()) {
		const { data, trailingNewline } = readJson(path);
		if (data.version === version) continue;
		data.version = version;
		writeJson(path, data, trailingNewline);
		changes.push(path.slice(repoRoot.length + 1));
	}
}

// Workspace entries in the lock file carry their own copy of the version;
// leaving them stale makes `npm ci` reinstall and rewrite the lock.
function updateLockFile(version, changes) {
	const path = join(repoRoot, 'package-lock.json');
	if (!existsSync(path)) return;

	const { data, trailingNewline } = readJson(path);
	let touched = false;

	if (data.version && data.version !== version) {
		data.version = version;
		touched = true;
	}

	for (const [key, entry] of Object.entries(data.packages ?? {})) {
		const isRoot = key === '';
		const isWorkspace = key.startsWith('packages/') && !key.includes('node_modules');
		if (!isRoot && !isWorkspace) continue;
		if (!entry || typeof entry.version !== 'string' || entry.version === version) continue;
		entry.version = version;
		touched = true;
	}

	if (touched) {
		writeJson(path, data, trailingNewline);
		changes.push('package-lock.json');
	}
}

// openapi-generator stamps `npmVersion` into every generated package.json,
// so it has to move with the rest or `npm run generate` reverts the bump.
function updateGeneratorConfig(version, changes) {
	const path = join(repoRoot, 'openapitools.json');
	if (!existsSync(path)) return;

	const { data, trailingNewline } = readJson(path);
	const generators = data['generator-cli']?.generators ?? {};
	let touched = false;

	for (const generator of Object.values(generators)) {
		const properties = generator?.additionalProperties;
		if (!properties || properties.npmVersion === version) continue;
		properties.npmVersion = version;
		touched = true;
	}

	if (touched) {
		writeJson(path, data, trailingNewline);
		changes.push('openapitools.json');
	}
}

function applyVersion(version, { dryRun }) {
	parseVersion(version);
	const from = currentVersion();

	if (dryRun) {
		console.log(`[version] ${from} -> ${version} (dry run, nothing written)`);
		return version;
	}

	const changes = [];
	updateRootPackage(version, changes);
	updateWorkspacePackages(version, changes);
	updateLockFile(version, changes);
	updateGeneratorConfig(version, changes);

	console.log(`[version] ${from} -> ${version} (${changes.length} file(s) updated)`);
	return version;
}

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const positional = args.filter((arg) => !arg.startsWith('--'));
const command = positional[0] ?? 'current';

switch (command) {
	case 'current':
		console.log(currentVersion());
		break;
	case 'next':
		console.log(nextMinor(currentVersion()));
		break;
	case 'bump':
		applyVersion(nextMinor(currentVersion()), { dryRun });
		break;
	case 'set': {
		const requested = positional[1];
		if (!requested) fail('set requires a version, e.g. `npm run version:set -- 1.0.0`');
		applyVersion(requested, { dryRun });
		break;
	}
	default:
		fail(`unknown command '${command}'. Use current, next, bump or set <version>.`);
}
