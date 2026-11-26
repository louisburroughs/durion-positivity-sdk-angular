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

## Package Entry Points

Every generated package (all but `sdk-transport`) has these ng-packagr entry points:

| Import | Holds |
| --- | --- |
| `@durion-sdk/<pkg>` | the generated services, models, `ApiModule`, and a re-export of the configuration entry |
| `@durion-sdk/<pkg>/configuration` | `Configuration`, `BASE_PATH`, `COLLECTION_FORMATS`, `provideApi`, `Param` and the other support types |
| `@durion-sdk/<pkg>/requirements` | `OPERATION_REQUIREMENTS`; see "Access Artifacts" |

Import from `@durion-sdk/<pkg>/configuration` in app startup code, e.g. `app.config.ts`:

```typescript
import { Configuration } from '@durion-sdk/accounting/configuration';
```

The Angular CLI puts a module in one chunk. Importing `Configuration` from the primary
entry puts that module, and every generated service the app uses anywhere, into the
initial chunk, even services only lazy-loaded pages call. The configuration entry holds
no services, so a lazy page's services stay in its own chunk. Existing imports from
`@durion-sdk/<pkg>` still compile and yield the same class.

The support files live in `packages/sdk-<pkg>/configuration/`. `npm run generate`
moves them there after each generator run, and the files in the primary entry
(`index.ts`, `api.module.ts`, the `src/*.ts` shims the services import) reach them only
by package name. A relative import would compile a second `Configuration` class and
`BASE_PATH` token into the primary bundle; the app would then provide a `Configuration`
the services never inject, and every request would silently go to the generated default
`basePath`. Two checks stop that from shipping:

- `src/__tests__/sdk-009-configuration-entry.test.ts` asserts both entries and the
  services see the same `Configuration` and `BASE_PATH`.
- `npm run pack` runs `scripts/check-configuration-entry.mjs` on each built package and
  fails if a primary `fesm2022` bundle defines `class Configuration` or
  `new InjectionToken('basePath')`. Run it on its own after a build with
  `npm run check:configuration-entry`.

## Access Artifacts

Three generated artifacts let an app decide what a signed-in user may do without keeping
its own copy of the backend's rules (ADR-0079 section 8). `npm run generate` writes them
after the clients; they are generated files, changed only through the scripts below.

### Operation requirements, in every generated package

| Import | Holds |
| --- | --- |
| `@durion-sdk/<pkg>/requirements` | `OPERATION_REQUIREMENTS`, `OPERATIONS_WITHOUT_REQUIREMENTS`, the `<Pkg>OperationId` union, `OperationRequirement`, `OperationCondition` |
| `@durion-sdk/<pkg>` | re-exports the above |
| `@durion-sdk/transport` | the documented `OperationRequirement` and `OperationCondition` types and `isOperationPermitted` |

```typescript
import { OPERATION_REQUIREMENTS, type WorkorderOperationId } from '@durion-sdk/workorder/requirements';
import { isOperationPermitted } from '@durion-sdk/transport';

const allowed = isOperationPermitted(OPERATION_REQUIREMENTS.getWorkorder, heldPermissions); // a Set<string>
```

- **Key.** The name of the generated service method (`WorkorderService.getWorkorder` →
  `getWorkorder`), which is the spec's `operationId` as the client generator spells it
  (`getAuditTrailByOrder_1` → `getAuditTrailByOrder1`). An operation under several tags is
  one method name on several services and one key. `<Pkg>OperationId` (`WorkorderOperationId`,
  `PeopleContactOperationId`) is the union of every operation of the package, so a
  reference to a renamed or removed operation stops compiling.
- **Value.** `{ anyOf, allOf, conditional, authenticated, conditions }`. The caller is permitted when it
  holds every `allOf` code and, if `anyOf` is not empty, at least one `anyOf` code.
  `conditional` lists the codes the operation asks for on some calls only
  (`importBillSpreadsheet` needs `accounting:bill_intake:manage` only with `saveMappingAs`;
  `getUserPermissions` needs `security:permission:view` only for another user). They are
  never demanded, so a permitted caller can still get a 403 on a call that needs one; gate
  the control that makes that call on the code as well.
  `authenticated` is `true` when the operation names the `AUTHENTICATED` sentinel; with all
  three lists empty, signing in is all it asks.
- **Conditions.** `conditions` names, by key, each check the operation's service makes
  beyond its authorization expression (backend `@PermissionCondition`, published as
  `x-permission-conditions`; backend #4067). Each is `{ code, kind, fields }`:
  `requiredWhen` (some calls are refused without `code`: gate the control that makes
  them), `waives` (a holder skips a step, such as a manager approval token) or `fields`
  (every call succeeds, but the response `fields`, as JSON paths like
  `items[].clockState`, are null or absent without `code`: gate the section that shows
  them). `fields` is empty for the other two kinds. An operation that declares none has
  `conditions: {}`. A condition is never demanded: `isOperationPermitted` ignores it.
  `reprintReceipt` reads
  `{ anyOf: ['invoice:receipt:generate'], ..., conditions: { pastReprintCap: { code: 'invoice:receipt:reprint_override', kind: 'requiredWhen', fields: [] } } }`.
- **Missing entry: refuse.** An operation whose spec has no `x-required-permissions` has
  unknown requirements. It has no entry (the map is `Partial`, so a lookup is
  `OperationRequirement | undefined`), it is listed in `OPERATIONS_WITHOUT_REQUIREMENTS`
  and in a warning at generation time, and a consumer must treat it as not permitted.
  `isOperationPermitted(undefined, ...)` returns `false`. Never read a missing entry as
  "open to everyone".
- **Source.** `scripts/generate-operation-requirements.mjs` reads the same spec files
  `openapitools.json` gives the client generator: `x-required-permissions` (every code
  the operation's authorization names), `x-required-permissions-all` (the subset that
  are each required; absent means none) and `x-required-permissions-conditional` (the
  subset the caller can be let through without; absent means none). `allOf` is the
  second list, `conditional` the third minus `allOf`, and `anyOf` the first minus both
  and the sentinel. `x-permission-conditions` gives `conditions`, checked by the rules
  the backend's customizer enforces: a list of `{ key, permission, kind, when, fields? }`
  with no other field, a key matching `^[a-z][A-Za-z0-9]{1,39}$` and unique on the
  operation, a non-empty `permission` and `when`, a kind of `REQUIRED_WHEN`, `WAIVES` or
  `FIELDS`, `fields` non-empty for `FIELDS` and absent otherwise, and no `REQUIRED_WHEN`
  code that `x-required-permissions-all` already requires. A malformed list fails
  generation; it is never skipped. The script
  fails when a key matches no generated service method. Rules and rendering are in `scripts/lib/operation-requirements.mjs`.

Import from the `/requirements` entry in code that runs at app startup (route gates), for
the reason given under "Package Entry Points": it holds no services.

### Permission catalog, in `@durion-sdk/security`

`@durion-sdk/security/permission-catalog` (re-exported by `@durion-sdk/security`) holds the
bit table of the JWT `perm_bits` claim (ADR-0040):

- `PERMISSION_CATALOG_VERSION: number`, the backend's `PermissionCode.CATALOG_VERSION`
- `PERMISSION_BY_BIT: readonly string[]`, the permission code at each bit index
- `DEPRECATED_PERMISSIONS: readonly string[]`, the retired codes, which keep their bit

`scripts/generate-permission-catalog.mjs` parses
`pos-security-service/.../internal/enums/PermissionCode.java` in the backend checkout
(`DURION_BACKEND_PATH`, else the script's argument, else `../durion-positivity-backend`).
A duplicate bit index or a gap fails the run. When the checkout has no `PermissionCode.java`
(one that holds only the specs), the committed catalog is kept and a warning says so;
`DURION_PERMISSION_CATALOG_REQUIRED=true` turns that into an error.

### Capability catalog, in `@durion-sdk/security`

`@durion-sdk/security/capability-catalog` (re-exported by `@durion-sdk/security`) holds the
capability catalog of ADR-0079 section 2, for build-time checks such as "every capability
opens a screen, section or action":

- `CAPABILITY_CATALOG_VERSION: string`, a content hash (16 hex digits of the SHA-256 of the
  entries); it changes exactly when an entry does
- `CAPABILITY_CATALOG: readonly CapabilityCatalogEntry[]`, every capability in key order:
  `key`, `name`, `description`, `area` (the catalog file it is declared in, without
  `.yaml`), `includes` and `permissions` (each sorted), `tenantWideOnly`, `hierarchy`
  (`'FINANCIAL' | 'OTHER'`) and `system` (a system capability, which no tenant role can hold)

`scripts/generate-capability-catalog.mjs` reads
`pos-security-service/src/main/resources/capabilities/*.yaml` in the same backend checkout as
the permission catalog. Like the backend loader (`CapabilityCatalog.java`) it skips the files
whose name starts with `_` (the internal permission lists and the starter roles, which are
not capabilities) and refuses what the loader refuses: an unknown field, a malformed key, a
blank name or description, a missing `tenantWideOnly` or `hierarchy`, an entry with neither
`permissions` nor `includes`, a repeated key, and an include that is unknown, crosses the
system boundary or has includes of its own. The rules are in
`scripts/lib/capability-catalog.mjs`. With no catalog file in the checkout, the committed
catalog is kept and a warning says so; `DURION_CAPABILITY_CATALOG_REQUIRED=true` turns that
into an error.

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

**Minor versions are automatic** — both `npm run generate` and `npm run pack` bump
one on every run. `0.1.0-alpha` becomes `0.2.0-alpha`: minor increments, patch resets
to `0`, and the prerelease suffix is kept.

`generate` bumps *before* generating, because the generator stamps `npmVersion` from
`openapitools.json` into every package.json it writes — a bump afterwards would be
reverted by the next regeneration.

Both commands take `--no-bump`. Since each bumps independently, a regenerate-then-pack
release should bump once, in `generate`, and pack at that version:

```bash
npm run generate                  # bumps
npm run pack -- --no-bump         # packs at the version generate produced
```

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
#    (generate bumps the minor version first)
cd ~/IdeaProjects/durion-positivity-sdk-angular
npm run generate
npm run build

# 2. verify before cutting a version
npm test
npm run lint

# 3. cut the tarballs at the version step 1 produced
npm run pack -- --no-bump

# 4. consume them
cd ~/IdeaProjects/durion-positivity-frontend
npm run sdk:install
npm run build
```

Commit the bumped version files together with the tarballs so the SDK version the
frontend installs matches what is on the branch.

The regenerate-and-consume loop, which bumps the minor version on every pass:

```bash
cd ~/IdeaProjects/durion-positivity-sdk-angular && npm run generate && npm run build && cd ~/IdeaProjects/durion-positivity-frontend && npm run sdk:install && npm run build
```

To iterate without moving the version, add `--no-bump`:

```bash
cd ~/IdeaProjects/durion-positivity-sdk-angular && npm run generate -- --no-bump && npm run build && cd ~/IdeaProjects/durion-positivity-frontend && npm run sdk:install && npm run build
```

`npm run sdk:install` in the frontend repacks `packages/*/dist` itself rather than
reusing the tarballs `npm run pack` writes, so the version it installs is whatever
`generate` last stamped into the package manifests.

## Related Docs

- `AGENTS.md` — repo-specific generation and testing rules
- `../durion/AGENTS.md` — shared workspace guidance
- `../durion/knowledge-catalog/` — domain and module knowledge
- `../durion-positivity-backend/` — source specs and backend contracts
