import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { isOperationPermitted, OperationRequirement } from '../../packages/sdk-transport/src';

// The access artifacts of ADR-0079 section 8:
//   - OPERATION_REQUIREMENTS, in every generated package: what a caller must
//     hold to call each operation, from the specs' x-required-permissions.
//   - the permission bit catalog, in @durion-sdk/security.
// The generator logic lives in scripts/lib/*.mjs; the committed output of
// `npm run generate` is checked further down.

/* eslint-disable @typescript-eslint/no-var-requires */
const yaml = require('js-yaml');
const requirementsLib = require('../../scripts/lib/operation-requirements.mjs');
const catalogLib = require('../../scripts/lib/permission-catalog.mjs');
/* eslint-enable @typescript-eslint/no-var-requires */

const ROOT = join(__dirname, '..', '..');
const PACKAGES_DIR = join(ROOT, 'packages');
const FIXTURE = join(__dirname, 'fixtures', 'operation-requirements.openapi.yaml');

const SDK_PACKAGES = readdirSync(PACKAGES_DIR)
  .filter((n) => n.startsWith('sdk-') && n !== 'sdk-transport')
  .filter((n) => statSync(join(PACKAGES_DIR, n)).isDirectory());

describe('sdk-010 operation requirements: generator rules', () => {
  const { requirementFor, collectOperationRequirements, renderOperationRequirementsModule, toMethodName, toTypePrefix } =
    requirementsLib;
  const collected = collectOperationRequirements(yaml.load(readFileSync(FIXTURE, 'utf8')), 'fixture');

  it('reads a list with no -all as alternatives: any one of them', () => {
    expect(collected.requirements.listThings).toEqual({
      anyOf: ['thing:thing:view'],
      allOf: [],
      conditional: [],
      authenticated: false,
    });
    expect(collected.requirements.createThing).toEqual({
      anyOf: ['thing:thing:create', 'thing:thing:manage'],
      allOf: [],
      conditional: [],
      authenticated: false,
    });
  });

  it('moves x-required-permissions-all codes into allOf', () => {
    expect(collected.requirements.deleteThing).toEqual({
      anyOf: [],
      allOf: ['thing:thing:audit', 'thing:thing:delete'],
      conditional: [],
      authenticated: false,
    });
  });

  it('reads the codes beside allOf as alternatives: one of them on top', () => {
    expect(collected.requirements.approveThing).toEqual({
      anyOf: ['thing:approval:approve', 'thing:approval:override'],
      allOf: ['thing:thing:view'],
      conditional: [],
      authenticated: false,
    });
    expect(isOperationPermitted(collected.requirements.approveThing, new Set(['thing:thing:view']))).toBe(false);
  });

  it('never demands an x-required-permissions-conditional code', () => {
    expect(collected.requirements.importThings).toEqual({
      anyOf: [],
      allOf: ['thing:thing:create'],
      conditional: ['thing:thing:manage'],
      authenticated: false,
    });
    expect(isOperationPermitted(collected.requirements.importThings, new Set(['thing:thing:create']))).toBe(true);
    expect(isOperationPermitted(collected.requirements.importThings, new Set(['thing:thing:manage']))).toBe(false);
    // The only code is conditional: some caller is served without it, so none is refused here.
    expect(collected.requirements.listUserThings).toEqual({
      anyOf: [],
      allOf: [],
      conditional: ['thing:thing:view'],
      authenticated: false,
    });
    expect(isOperationPermitted(collected.requirements.listUserThings, new Set())).toBe(true);
    expect(collected.authenticatedOnly).not.toContain('listUserThings');
  });

  it('keeps a code required when -all and -conditional both name it', () => {
    expect(
      requirementFor({
        'x-required-permissions': ['a:b:c', 'd:e:f'],
        'x-required-permissions-all': ['a:b:c'],
        'x-required-permissions-conditional': ['a:b:c', 'g:h:i'],
      }),
    ).toEqual({ anyOf: ['d:e:f'], allOf: ['a:b:c'], conditional: ['g:h:i'], authenticated: false });
  });

  it('turns the AUTHENTICATED sentinel into the flag, never into a code', () => {
    expect(collected.requirements.getThing).toEqual({ anyOf: [], allOf: [], conditional: [], authenticated: true });
    expect(collected.authenticatedOnly).toEqual(['getThing']);
    expect(collected.requirements.patchThing1).toEqual({
      anyOf: ['thing:thing:edit'],
      allOf: [],
      conditional: [],
      authenticated: true,
    });
    expect(requirementFor({ 'x-required-permissions-all': ['AUTHENTICATED', 'a:b:c'] })).toEqual({
      anyOf: [],
      allOf: ['a:b:c'],
      conditional: [],
      authenticated: true,
    });
  });

  it('leaves an operation with no declared requirement out of the map and reports it', () => {
    expect(collected.missing).toEqual(['listPublicThings', 'submitPublicThing']);
    expect(collected.requirements).not.toHaveProperty('listPublicThings');
    // An empty list says nothing about who may call: unknown, not "anyone".
    expect(collected.requirements).not.toHaveProperty('submitPublicThing');
    expect(requirementFor({})).toBeUndefined();
    expect(requirementFor({ 'x-required-permissions': [] })).toBeUndefined();
  });

  it('keeps a code named only in -all required, and reads -all alone as the whole list', () => {
    expect(requirementFor({ 'x-required-permissions': ['a:b:c'], 'x-required-permissions-all': ['d:e:f'] })).toEqual({
      anyOf: ['a:b:c'],
      allOf: ['d:e:f'],
      conditional: [],
      authenticated: false,
    });
    expect(requirementFor({ 'x-required-permissions-all': ['d:e:f'] })).toEqual({
      anyOf: [],
      allOf: ['d:e:f'],
      conditional: [],
      authenticated: false,
    });
  });

  it('rejects a malformed extension instead of guessing', () => {
    expect(() => requirementFor({ 'x-required-permissions': 'a:b:c' }, 'GET /x')).toThrow(/GET \/x.*must be a list/);
    expect(() => requirementFor({ 'x-required-permissions': ['a:b:c', 7] })).toThrow(/must be a list/);
    expect(() => requirementFor({ 'x-required-permissions-all': [''] })).toThrow(/must be a list/);
    expect(() => requirementFor({ 'x-required-permissions-conditional': 'a:b:c' })).toThrow(/must be a list/);
  });

  it('keys by the generated service method name, sorted, and lists every operation', () => {
    expect(toMethodName('getAuditTrailByOrder_1')).toBe('getAuditTrailByOrder1');
    expect(toMethodName('GetThing')).toBe('getThing');
    expect(toMethodName('get-thing.by_id')).toBe('getThingById');
    expect(collected.operationIds).toEqual([
      'approveThing',
      'createThing',
      'deleteThing',
      'getThing',
      'importThings',
      'listPublicThings',
      'listThings',
      'listUserThings',
      'patchThing1',
      'submitPublicThing',
    ]);
    expect(Object.keys(collected.requirements)).toEqual([
      'approveThing',
      'createThing',
      'deleteThing',
      'getThing',
      'importThings',
      'listThings',
      'listUserThings',
      'patchThing1',
    ]);
  });

  it('refuses an operation it cannot key', () => {
    expect(() => collectOperationRequirements({ paths: { '/a': { get: {} } } }, 'spec')).toThrow(
      /spec: GET \/a: operation has no operationId/,
    );
    expect(() =>
      collectOperationRequirements(
        { paths: { '/a': { get: { operationId: 'get_1' } }, '/b': { get: { operationId: 'get1' } } } },
        'spec',
      ),
    ).toThrow(/"get1" is also GET \/a/);
  });

  it('renders the same module for the same input, with a union type of every operation', () => {
    const input = { moduleName: 'people-contact', specLabel: 'fixture.yaml', ...collected };
    const rendered = renderOperationRequirementsModule(input);

    expect(renderOperationRequirementsModule(input)).toBe(rendered);
    expect(toTypePrefix('people-contact')).toBe('PeopleContact');
    expect(rendered).toContain("export type PeopleContactOperationId =\n  | 'approveThing'\n  | 'createThing'");
    expect(rendered).toContain("  | 'listPublicThings'");
    expect(rendered).toContain(
      'export const OPERATION_REQUIREMENTS: Readonly<Partial<Record<PeopleContactOperationId, OperationRequirement>>> = {',
    );
    expect(rendered).toContain(
      "  approveThing: { anyOf: ['thing:approval:approve', 'thing:approval:override'], allOf: ['thing:thing:view'], conditional: [], authenticated: false },",
    );
    expect(rendered).toContain("  getThing: { anyOf: [], allOf: [], conditional: [], authenticated: true },");
    expect(rendered).not.toMatch(/^\s+listPublicThings:/m);
    expect(rendered).toContain(
      "export const OPERATIONS_WITHOUT_REQUIREMENTS: readonly PeopleContactOperationId[] = [\n  'listPublicThings',\n  'submitPublicThing',\n];",
    );
  });

  it('renders a package with no operations as an empty map over `never`', () => {
    const rendered = renderOperationRequirementsModule({
      moduleName: 'inquiry',
      specLabel: 'fixture.yaml',
      ...collectOperationRequirements({ paths: {} }),
    });
    expect(rendered).toContain('export type InquiryOperationId = never;');
    expect(rendered).toContain('OPERATION_REQUIREMENTS: Readonly<Partial<Record<InquiryOperationId, OperationRequirement>>> = {\n};');
    expect(rendered).toContain('OPERATIONS_WITHOUT_REQUIREMENTS: readonly InquiryOperationId[] = [];');
  });
});

describe('sdk-010 isOperationPermitted', () => {
  const requirement = (
    anyOf: string[],
    allOf: string[],
    authenticated = false,
    conditional: string[] = [],
  ): OperationRequirement => ({ anyOf, allOf, conditional, authenticated });

  it('refuses a missing requirement (fail closed)', () => {
    expect(isOperationPermitted(undefined, new Set(['a', 'b']))).toBe(false);
  });

  it('asks for one anyOf code when there are any', () => {
    expect(isOperationPermitted(requirement(['a', 'b'], []), new Set(['b']))).toBe(true);
    expect(isOperationPermitted(requirement(['a', 'b'], []), new Set(['c']))).toBe(false);
  });

  it('asks for every allOf code, and one anyOf code on top', () => {
    expect(isOperationPermitted(requirement([], ['a', 'b']), new Set(['a', 'b']))).toBe(true);
    expect(isOperationPermitted(requirement([], ['a', 'b']), new Set(['a']))).toBe(false);
    expect(isOperationPermitted(requirement(['c', 'd'], ['a']), new Set(['a', 'd']))).toBe(true);
    expect(isOperationPermitted(requirement(['c', 'd'], ['a']), new Set(['a']))).toBe(false);
    expect(isOperationPermitted(requirement(['c', 'd'], ['a']), new Set(['c', 'd']))).toBe(false);
  });

  it('never asks for a conditional code', () => {
    expect(isOperationPermitted(requirement([], ['a'], false, ['b']), new Set(['a']))).toBe(true);
    expect(isOperationPermitted(requirement([], ['a'], false, ['b']), new Set(['b']))).toBe(false);
  });

  it('lets any signed-in caller through an operation that names no code', () => {
    expect(isOperationPermitted(requirement([], [], true), new Set())).toBe(true);
  });
});

describe('sdk-010 operation requirements: generated packages', () => {
  describe.each(SDK_PACKAGES)('%s', (pkg) => {
    const pkgDir = join(PACKAGES_DIR, pkg);
    const npmName = `@durion-sdk/${pkg.replace(/^sdk-/, '')}`;
    const entry = `${npmName}/requirements`;
    const methodNames = new Set(
      readdirSync(join(pkgDir, 'src', 'apis'))
        .filter((n) => n.endsWith('.ts'))
        .flatMap((n) => [...readFileSync(join(pkgDir, 'src', 'apis', n), 'utf8').matchAll(/^\s+public (\w+)\(/gm)])
        .map((m) => m[1]),
    );

    it('declares an ng-packagr secondary entry point in requirements/', () => {
      const ngPackage = JSON.parse(readFileSync(join(pkgDir, 'requirements', 'ng-package.json'), 'utf8'));
      expect(ngPackage.lib.entryFile).toBe('index.ts');
    });

    it('re-exports the entry from the primary entry by package name, once', () => {
      for (const index of [join(pkgDir, 'index.ts'), join(pkgDir, 'src', 'index.ts')]) {
        const source = readFileSync(index, 'utf8');
        expect(source.split(`export * from '${entry}';`)).toHaveLength(2);
        expect(source).not.toMatch(/from '\.\.?\/(\.\.\/)*requirements/);
      }
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      expect(require(join(pkgDir, 'index.ts')).OPERATION_REQUIREMENTS).toBe(require(entry).OPERATION_REQUIREMENTS);
    });

    it('keys every entry by a generated service method, in sorted order', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { OPERATION_REQUIREMENTS, OPERATIONS_WITHOUT_REQUIREMENTS } = require(entry);
      const keys = Object.keys(OPERATION_REQUIREMENTS);

      expect(keys.filter((key) => !methodNames.has(key))).toEqual([]);
      expect(OPERATIONS_WITHOUT_REQUIREMENTS.filter((key: string) => !methodNames.has(key))).toEqual([]);
      expect(OPERATIONS_WITHOUT_REQUIREMENTS.filter((key: string) => key in OPERATION_REQUIREMENTS)).toEqual([]);
      expect(keys).toEqual([...keys].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)));
    });

    it('never lists the AUTHENTICATED sentinel as a permission code, or one code in two lists', () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const requirements = Object.entries(require(entry).OPERATION_REQUIREMENTS) as [string, OperationRequirement][];
      const bad = requirements
        .filter(
          ([, r]) =>
            [...r.anyOf, ...r.allOf, ...r.conditional].includes('AUTHENTICATED') ||
            new Set([...r.anyOf, ...r.allOf, ...r.conditional]).size !==
              r.anyOf.length + r.allOf.length + r.conditional.length ||
            (!r.authenticated && r.anyOf.length === 0 && r.allOf.length === 0 && r.conditional.length === 0),
        )
        .map(([key]) => key);
      expect(bad).toEqual([]);
    });
  });
});

describe('sdk-010 permission catalog: parser', () => {
  const { parsePermissionCatalog, renderPermissionCatalogModule } = catalogLib;
  const enumSource = (constants: string, version = 'public static final int CATALOG_VERSION = 7;') => `
public enum PermissionCode {

    // -- Things
    THING__THING__VIEW(0, "thing:thing:view"),
${constants}

    /**
     * Current catalog version.
     */
    ${version}

    PermissionCode(int bitIndex, String code) {
        this.bitIndex = bitIndex;
    }
}
`;

  it('reads the version and the codes by bit index, whatever order they are declared in', () => {
    const catalog = parsePermissionCatalog(
      enumSource(`    THING__THING__DELETE(2, "thing:thing:delete"),\n    THING__THING__EDIT(1, "thing:thing:edit");`),
    );
    expect(catalog).toEqual({
      version: 7,
      byBit: ['thing:thing:view', 'thing:thing:edit', 'thing:thing:delete'],
      deprecated: [],
    });
  });

  it('keeps a deprecated code at its bit index and lists it as deprecated', () => {
    const catalog = parsePermissionCatalog(
      enumSource(`    /**
     * No successor. Audit doc section 3.
     */
    @Deprecated
    THING__THING__EDIT(1, "thing:thing:edit"),
    /** @deprecated see {@link #THING__THING__EDIT} */
    @Deprecated
    THING__THING__DELETE(2, "thing:thing:delete"),
    THING__THING__AUDIT(3, "thing:thing:audit");`),
    );
    expect(catalog.byBit).toEqual(['thing:thing:view', 'thing:thing:edit', 'thing:thing:delete', 'thing:thing:audit']);
    expect(catalog.deprecated).toEqual(['thing:thing:edit', 'thing:thing:delete']);
  });

  it('refuses a gap in the bit indexes', () => {
    expect(() => parsePermissionCatalog(enumSource(`    THING__THING__AUDIT(3, "thing:thing:audit");`))).toThrow(
      'Bit indexes are not contiguous; missing: 1, 2',
    );
  });

  it('refuses one bit index used twice', () => {
    expect(() => parsePermissionCatalog(enumSource(`    THING__THING__EDIT(0, "thing:thing:edit");`))).toThrow(
      'Duplicate bit index 0: thing:thing:view and thing:thing:edit',
    );
  });

  it('refuses a source with no version or no constants', () => {
    expect(() => parsePermissionCatalog(enumSource('', ''))).toThrow(/CATALOG_VERSION/);
    expect(() => parsePermissionCatalog('public static final int CATALOG_VERSION = 3;')).toThrow(
      /No permission constants/,
    );
  });

  it('renders the names and shapes the frontend already imports', () => {
    const rendered = renderPermissionCatalogModule({
      version: 7,
      byBit: ['thing:thing:view', 'thing:thing:edit'],
      deprecated: ['thing:thing:edit'],
    });
    expect(rendered).toContain('export const PERMISSION_CATALOG_VERSION = 7;');
    expect(rendered).toContain(
      "export const PERMISSION_BY_BIT: readonly string[] = [\n  'thing:thing:view',\n  'thing:thing:edit',\n];",
    );
    expect(rendered).toContain("export const DEPRECATED_PERMISSIONS: readonly string[] = [\n  'thing:thing:edit',\n];");
    expect(renderPermissionCatalogModule({ version: 1, byBit: ['a:b:c'], deprecated: [] })).toContain(
      'export const DEPRECATED_PERMISSIONS: readonly string[] = [];',
    );
  });
});

describe('sdk-010 permission catalog: @durion-sdk/security', () => {
  const pkgDir = join(PACKAGES_DIR, 'sdk-security');
  const entry = '@durion-sdk/security/permission-catalog';
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const catalog = require(entry);

  it('ships the catalog as a secondary entry point, re-exported from the primary one', () => {
    expect(existsSync(join(pkgDir, 'permission-catalog', 'ng-package.json'))).toBe(true);
    for (const index of [join(pkgDir, 'index.ts'), join(pkgDir, 'src', 'index.ts')]) {
      expect(readFileSync(index, 'utf8').split(`export * from '${entry}';`)).toHaveLength(2);
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    expect(require(join(pkgDir, 'index.ts')).PERMISSION_BY_BIT).toBe(catalog.PERMISSION_BY_BIT);
  });

  it('holds one non-empty code per bit, each once, with the deprecated ones among them', () => {
    const codes: string[] = catalog.PERMISSION_BY_BIT;
    expect(Number.isInteger(catalog.PERMISSION_CATALOG_VERSION)).toBe(true);
    expect(codes.length).toBeGreaterThan(0);
    expect(codes.every((code) => typeof code === 'string' && code.length > 0)).toBe(true);
    expect(new Set(codes).size).toBe(codes.length);
    expect(catalog.DEPRECATED_PERMISSIONS.filter((code: string) => !codes.includes(code))).toEqual([]);
  });

  it('keeps the bit indexes the backend has already issued tokens with', () => {
    expect(catalog.PERMISSION_BY_BIT[0]).toBe('accounting:je:view');
    expect(catalog.PERMISSION_BY_BIT[542]).toBe('appointments:reschedule:approve');
    expect(catalog.PERMISSION_BY_BIT[543]).toBe('accounting:reconciliation:approve');
  });
});
