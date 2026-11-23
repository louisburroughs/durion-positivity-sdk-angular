# AGENTS.md — durion-positivity-sdk-angular

## Quick Start

```bash
npm install
npm run generate
npm run build
npm test
```

## Versioning and Tarballs

```bash
npm run generate              # bump the minor version, then generate the clients
npm run pack -- --no-bump     # pack at the version generate produced
npm run version:set -- 1.0.0  # major bumps only, by hand
```

- `npm run generate` and `npm run pack` each bump the **minor** version once per run. A regenerate-then-pack release should bump once, in `generate`, and pack with `--no-bump`.
- `generate` bumps first because the generator stamps `npmVersion` from `openapitools.json` into every package.json it writes; a later bump would be reverted by the next regeneration.
- Both take `--no-bump` to run at the current version.
- Never hand-edit a version in a single file. `scripts/version.mjs` writes all of them — root `package.json`, `packages/*/package.json`, `package-lock.json` and every `npmVersion` in `openapitools.json`.
- Major versions are never automated; set them with `npm run version:set -- <major>.0.0`, then generate/pack with `--no-bump`.

## Critical Rules

- Treat generated files as build outputs; only change generation templates, scripts, or backend specs when the contract changes.
- Keep package APIs Observable-based and Angular-oriented.
- Update the package `src/index.ts` when changing the public surface.
- Prefer backend OpenAPI/spec changes over hand-editing generated clients.
- Keep ADRs and repo docs aligned with generation changes.
- Generated packages keep `Configuration`, `BASE_PATH` and the other support files in the `@durion-sdk/<pkg>/configuration` secondary entry (`packages/sdk-<pkg>/configuration/`). Files in the primary entry must import them by that package name, never by relative path; see README "Package Entry Points".

## Access Artifacts (ADR-0079 section 8)

`npm run generate` also writes two generated artifacts; details in README "Access Artifacts".

- `packages/sdk-<pkg>/requirements/` (`@durion-sdk/<pkg>/requirements`, re-exported by the package root): `OPERATION_REQUIREMENTS`, keyed by generated service method name, from the specs' `x-required-permissions` and `x-required-permissions-all`. Written by `scripts/generate-operation-requirements.mjs`.
- `packages/sdk-security/permission-catalog/` (`@durion-sdk/security/permission-catalog`): `PERMISSION_CATALOG_VERSION` and `PERMISSION_BY_BIT`, from the backend's `PermissionCode.java`. Written by `scripts/generate-permission-catalog.mjs`.
- Fail closed: an operation with no `x-required-permissions` gets no entry and a generation warning. A missing entry means "refuse", never "open"; do not add a default, and do not hand-add entries. The fix is the backend annotation.
- Change the rules in `scripts/lib/*.mjs` and cover them in `src/__tests__/sdk-010-access-artifacts.test.ts`; never edit the generated files.
- A generated package cannot import `@durion-sdk/transport` at build time, so each `requirements` entry declares its own `OperationRequirement`. Keep it identical to the one in `packages/sdk-transport/src/operation-requirement.ts`.

## Where to Look

- Workspace guidance: `../durion/AGENTS.md`
- Shared agent config: `.durion-shared/`
- Knowledge catalog: `../durion/knowledge-catalog/`
- Backend specs: `../durion-positivity-backend/pos-*/openapi.yaml`
