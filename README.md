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

## Packaging (Tarballs)

```bash
npm run pack                      # bump the minor version, then pack every SDK package
npm run pack -- --module location # bump the minor version, then pack only sdk-location
```

`npm run pack` bumps the repo-wide **minor** version once per run — `0.1.0-alpha`
becomes `0.2.0-alpha`, patch resets to `0` and the prerelease suffix is kept — and
writes the new version to the root `package.json`, every `packages/*/package.json`,
`package-lock.json` and the `npmVersion` of each generator in `openapitools.json`
(so `npm run generate` cannot revert it). Packing then runs each package's `prepare`
hook, so the tarballs contain a fresh build.

**Major versions are manual.** Set one by hand:

```bash
npm run version:set -- 1.0.0      # writes the version everywhere, packs nothing
npm run pack -- --no-bump         # then pack at that version
```

Other options:

```bash
npm run version:current           # print the current version
npm run version:next              # print what the next minor bump produces
npm run pack -- --dry-run         # show what a run would do, write nothing
npm run pack -- --out-dir dist/tarballs
npm run pack -- --prune-old       # delete superseded tarballs of the packed packages
```

Tarballs land in the repo root by default, named `durion-sdk-<module>-<version>.tgz`.

## Related Docs

- `AGENTS.md` — repo-specific generation and testing rules
- `../durion/AGENTS.md` — shared workspace guidance
- `../durion/knowledge-catalog/` — domain and module knowledge
- `../durion-positivity-backend/` — source specs and backend contracts

cd ~/IdeaProjects/durion-positivity-sdk-angular && npm run generate && npm run build && cd ~/IdeaProjects/durion-positivity-frontend && npm run sdk:install && npm run build
