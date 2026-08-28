# durion-positivity-sdk-angular

Angular-native TypeScript SDK for the Durion POS backend. It generates Angular service clients from OpenAPI specs and wraps the generated surface with typed workflow helpers.

## Quick Start

```bash
npm install
npm run generate
npm run build
```

## Common Checks

```bash
npm test
npm run lint
```

## Versioning

Every package in this repo shares one version. `scripts/version.mjs` is the only
thing that writes it, and it writes all four places at once:

- the root `package.json`
- every `packages/*/package.json`
- `package-lock.json` (root entry plus each workspace entry)
- the `npmVersion` of each generator in `openapitools.json` — without this,
  `npm run generate` would stamp the old version back into the generated packages

Never edit a version by hand in one file; the four would drift apart.

```bash
npm run version:current           # print the current version
npm run version:next              # print what the next minor bump produces
npm run version:bump              # bump the minor version without packing
npm run version:set -- 1.0.0      # set an explicit version without packing
```

**Minor versions are automatic** — `npm run pack` bumps one on every run.
`0.1.0-alpha` becomes `0.2.0-alpha`: minor increments, patch resets to `0`, and the
prerelease suffix is kept.

**Major versions are manual.** Nothing in the pack path ever touches the major
component. To release one:

```bash
npm run version:set -- 1.0.0      # writes 1.0.0 everywhere, packs nothing
npm run pack -- --no-bump         # then pack at that version
```

## Packaging (Tarballs)

```bash
npm run pack                      # bump the minor version, then pack every SDK package
npm run pack -- --module location # bump the minor version, then pack only sdk-location
```

The version is bumped once per run, before anything is packed, so every tarball a
run produces carries the same new version. Packing then runs each package's
`prepare` hook, which builds it with ng-packagr (or `tsc` for `sdk-transport`).

Tarballs land in the repo root by default, named `durion-sdk-<module>-<version>.tgz`.

| Flag | Effect |
| --- | --- |
| `--module <name>` | Pack only `packages/sdk-<name>` |
| `--no-bump` | Pack at the current version, bumping nothing |
| `--out-dir <dir>` | Write tarballs somewhere else, e.g. `dist/tarballs` |
| `--prune-old` | Delete superseded tarballs of the packages just packed |
| `--dry-run` | Print what a run would do and write nothing |
| `--help` | Show usage |

Run `bash scripts/pack-sdk.sh --help` for the same list from the script itself.

Check what a run would do before committing to it:

```bash
npm run pack -- --dry-run
```

## Releasing to the Frontend

Regenerate, verify, pack, then install the tarballs into the consuming app:

```bash
# 1. regenerate the clients from the backend specs and build them
cd ~/IdeaProjects/durion-positivity-sdk-angular
npm run generate
npm run build

# 2. verify before cutting a version
npm test
npm run lint

# 3. cut the tarballs (bumps the minor version)
npm run pack

# 4. consume them
cd ~/IdeaProjects/durion-positivity-frontend
npm run sdk:install
npm run build
```

Commit the bumped version files together with the tarballs so the SDK version the
frontend installs matches what is on the branch.

Without cutting a new version, the regenerate-and-consume loop is:

```bash
cd ~/IdeaProjects/durion-positivity-sdk-angular && npm run generate && npm run build && cd ~/IdeaProjects/durion-positivity-frontend && npm run sdk:install && npm run build
```

## Related Docs

- `AGENTS.md` — repo-specific generation and testing rules
- `../durion/AGENTS.md` — shared workspace guidance
- `../durion/knowledge-catalog/` — domain and module knowledge
- `../durion-positivity-backend/` — source specs and backend contracts
