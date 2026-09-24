import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Each generated package ships Configuration, BASE_PATH and provideApi from a
// secondary entry point, `@durion-sdk/<pkg>/configuration`, so an app's startup
// code can import them without pulling every generated service into its initial
// chunk. The primary entry re-exports them. Both entries, and the services, must
// see the same class and token: a second copy would let the app provide a
// Configuration the services never inject. scripts/check-configuration-entry.mjs
// checks the same invariant against the built bundles.

const ROOT = join(__dirname, '..', '..');
const PACKAGES_DIR = join(ROOT, 'packages');

const SDK_PACKAGES = readdirSync(PACKAGES_DIR)
  .filter((n) => n.startsWith('sdk-') && n !== 'sdk-transport')
  .filter((n) => statSync(join(PACKAGES_DIR, n)).isDirectory());

const SUPPORT_FILES = [
  'configuration',
  'api.base.service',
  'query.params',
  'encoder',
  'param',
  'variables',
  'provide-api',
];

describe('sdk-009 configuration entry point', () => {
  describe.each(SDK_PACKAGES)('%s', (pkg) => {
    const pkgDir = join(PACKAGES_DIR, pkg);
    const npmName = `@durion-sdk/${pkg.replace(/^sdk-/, '')}`;
    const entry = `${npmName}/configuration`;

    it('declares an ng-packagr secondary entry point in configuration/', () => {
      const ngPackage = JSON.parse(readFileSync(join(pkgDir, 'configuration', 'ng-package.json'), 'utf8'));
      expect(ngPackage.lib.entryFile).toBe('index.ts');
    });

    it.each(SUPPORT_FILES)('keeps %s.ts in configuration/ and not in the primary entry', (file) => {
      expect(existsSync(join(pkgDir, 'configuration', `${file}.ts`))).toBe(true);
      expect(existsSync(join(pkgDir, `${file}.ts`))).toBe(false);
    });

    it('reaches the configuration entry from the primary entry by package name only', () => {
      const primaryFiles = [
        join(pkgDir, 'index.ts'),
        join(pkgDir, 'api.module.ts'),
        ...readdirSync(join(pkgDir, 'src'))
          .filter((n) => n.endsWith('.ts'))
          .map((n) => join(pkgDir, 'src', n)),
      ];
      for (const file of primaryFiles) {
        const source = readFileSync(file, 'utf8');
        expect(source).not.toMatch(/from '\.\.?\/(\.\.\/)*configuration\//);
        expect(source).not.toMatch(
          /from '\.\.?\/(configuration|api\.base\.service|query\.params|encoder|param|variables|provide-api)'/,
        );
      }
    });

    it('exports the same Configuration, BASE_PATH and provideApi from both entries and to the services', () => {
      // `@durion-sdk/<pkg>` publishes the package root index.ts (ng-package.json
      // entryFile); Jest's mapper points the bare name at src/index.ts instead,
      // so load the published entry file by path.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const secondary = require(entry);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const primary = require(join(pkgDir, 'index.ts'));
      // What the generated services under src/apis import as '../configuration'.
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const serviceView = require(join(pkgDir, 'src', 'configuration.ts'));

      expect(secondary.Configuration).toBeDefined();
      expect(secondary.BASE_PATH).toBeDefined();
      expect(secondary.provideApi).toBeDefined();

      expect(primary.Configuration).toBe(secondary.Configuration);
      expect(primary.BASE_PATH).toBe(secondary.BASE_PATH);
      expect(primary.provideApi).toBe(secondary.provideApi);
      expect(serviceView.Configuration).toBe(secondary.Configuration);
      expect(serviceView.BASE_PATH).toBe(secondary.BASE_PATH);
    });
  });
});
