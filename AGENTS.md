# AGENTS.md — durion-positivity-sdk-angular

## Quick Start

```bash
npm install
npm run generate
npm run build
npm test
```

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
