# AGENTS.md — durion-positivity-sdk-angular

## Project Overview

Angular-native TypeScript SDK for Durion Positivity backend services. This repo generates Angular 21 `typescript-angular` clients from the sibling `durion-positivity-backend` OpenAPI specs and layers a small amount of hand-written transport and workflow code on top.

This is a workspace/package repo, not an Angular application:

- Generated API services use Angular DI and `HttpClient`
- Public API methods return `Observable<T>`
- Packages live under `packages/sdk-*`
- Root tests validate generation, exports, transport behaviour, and workflow helpers

For cross-repo guidance, see `../durion/AGENTS.md`.

---

## Documentation Hierarchy

**Always read local docs before making changes.**

Check docs in this order:

1. `AGENTS.md` in this repo
2. `README.md` at the repo root
3. `README.md` inside the package you are changing, for example `packages/sdk-order/README.md`
4. Backend OpenAPI spec and implementation context in `../durion-positivity-backend`

If you change package usage, generation flow, or developer setup, update the nearest relevant `README.md`.

---

## Quick Prerequisites

- Node.js 18+
- npm workspaces
- Angular 21 peer compatibility
- Sibling checkout of `../durion-positivity-backend` for OpenAPI generation

Install dependencies from the repo root:

```bash
cd durion-positivity-sdk-angular
npm install
```

---

## Build, Test, Lint

```bash
cd durion-positivity-sdk-angular
npm run build
npm test
npm run lint
```

Useful targeted commands:

```bash
# Build one package
cd packages/sdk-security
npm run build

# Run one Jest suite
npx jest src/__tests__/sdk-008-workflow-helpers.test.ts

# Regenerate all clients
npm run generate

# Regenerate one module
./scripts/generate-openapi.sh --module security
```

---

## Architecture

### Workspace Structure

- `packages/sdk-transport/` — hand-written shared transport and error types
- `packages/sdk-*/src/apis/` — generated Angular service classes
- `packages/sdk-*/src/models/` — generated model types
- `packages/sdk-*/src/workflows/` — hand-written workflow helpers
- `packages/sdk-*/src/index.ts` — public package exports
- `src/__tests__/` — root Jest coverage for repo-level behaviour
- `templates/typescript-angular/` — custom OpenAPI generator templates
- `scripts/generate-openapi.sh` — primary generation pipeline
- `openapitools.json` — generator registry and backend spec mapping

### Generation Boundary

**Do not hand-edit generated client output.** Generated files are overwritten by `npm run generate`.

Treat these as generated unless you are intentionally changing the generation pipeline:

- `packages/sdk-*/src/apis/**`
- `packages/sdk-*/src/models/**`
- `packages/sdk-*/src/runtime.ts`
- generated companion `.js` files emitted into package `src/`
- post-generation shim files created by `scripts/generate-openapi.sh`

If the SDK contract is wrong, fix one of these sources instead:

1. Backend OpenAPI spec in `../durion-positivity-backend/pos-*/openapi.yaml`
2. `openapitools.json`
3. `templates/typescript-angular/*`
4. `scripts/generate-openapi.sh`

Then regenerate and verify the affected package.

### Backend Dependency

The SDK reads specs from the sibling backend repo, for example:

- `../durion-positivity-backend/pos-security-service/openapi.yaml`
- `../durion-positivity-backend/pos-order/openapi.yaml`
- `../durion-positivity-backend/pos-workorder/openapi.yaml`

When adding a new SDK module or endpoint, update the backend spec first.

---

## Angular and RxJS Conventions

- Keep Angular-facing APIs Observable-based. Do not convert package APIs to `Promise`.
- Generated services are Angular DI services; consumer usage should assume `provideHttpClient(...)` exists in the application.
- Prefer Angular HTTP interceptors for auth in consuming apps rather than pushing auth logic into every workflow.
- Keep workflow helpers thin. They should compose generated API calls, not reimplement transport logic.
- Follow the existing workflow pattern: constructor injection of generated API classes, explicit delegation, and typed params via `Parameters<Api['method']>[0]` where practical.
- Export new public workflow helpers from the package `src/index.ts`.

---

## Testing Requirements

Coverage threshold is enforced globally at 80%.

When changing hand-written code:

- Add or update Jest coverage in `src/__tests__/`
- For workflow helpers, add behavioural tests that prove delegation to the underlying generated API class
- For transport changes, extend transport-focused tests rather than only relying on manual checks
- If exports change, add or update export-surface tests

Generated code under `apis/`, `models/`, and `runtime.ts` is excluded from coverage and should not receive hand-written tests directly.

---

## Package Conventions

- All publishable packages are scoped as `@durion-sdk/*`
- `sdk-internal` is private and should remain non-public
- Keep package public surfaces deliberate: update `src/index.ts` only for intended exports
- Preserve Angular peer dependency compatibility when touching generated package config
- `sdk-transport` is the place for shared config, headers, request shaping, and shared error types

If a change affects multiple packages uniformly, prefer fixing templates or generation config once rather than patching each package manually.

---

## Known Generation Rules

- The repo uses the `typescript-angular` OpenAPI generator with Angular 21 settings
- `scripts/generate-openapi.sh` includes post-generation cleanup for `sdk-inventory` and `sdk-vehicle-inventory`
- Keep those cleanups intact unless the underlying generator or backend spec change makes them obsolete
- If you remove a cleanup, prove it by regenerating and running the affected tests/build

---

## Notes for Agents

- Before editing a package, check whether its `README.md` has module-specific usage notes
- Prefer targeted regeneration with `--module` when changing one backend service
- Do not commit `dist/` changes unless the task explicitly requires built artifacts
- Do not replace Angular-native patterns with framework-agnostic fetch patterns from `durion-positivity-sdk`
- If a requested change appears to require direct edits in generated code, stop and trace it back to the OpenAPI spec, template, or generation script first
