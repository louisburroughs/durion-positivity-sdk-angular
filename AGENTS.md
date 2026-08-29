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

## Where to Look

- Workspace guidance: `../durion/AGENTS.md`
- Shared agent config: `.durion-shared/`
- Knowledge catalog: `../durion/knowledge-catalog/`
- Backend specs: `../durion-positivity-backend/pos-*/openapi.yaml`
