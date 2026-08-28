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
npm run pack                  # bump the minor version, then pack the SDK packages
npm run version:set -- 1.0.0  # major bumps only, by hand
```

- `npm run pack` owns version bumps: it increments the **minor** version once per run and packs at the new version.
- Never hand-edit a version in a single file. `scripts/version.mjs` writes all of them — root `package.json`, `packages/*/package.json`, `package-lock.json` and every `npmVersion` in `openapitools.json`.
- Major versions are never automated; set them with `npm run version:set -- <major>.0.0`, then pack with `npm run pack -- --no-bump`.

## Critical Rules

- Treat generated files as build outputs; only change generation templates, scripts, or backend specs when the contract changes.
- Keep package APIs Observable-based and Angular-oriented.
- Update the package `src/index.ts` when changing the public surface.
- Prefer backend OpenAPI/spec changes over hand-editing generated clients.
- Keep ADRs and repo docs aligned with generation changes.

## Where to Look

- Workspace guidance: `../durion/AGENTS.md`
- Shared agent config: `.durion-shared/`
- Knowledge catalog: `../durion/knowledge-catalog/`
- Backend specs: `../durion-positivity-backend/pos-*/openapi.yaml`
