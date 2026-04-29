import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(__dirname, '..', '..');
const PACKAGES_DIR = join(ROOT, 'packages');

const SDK_PACKAGES = readdirSync(PACKAGES_DIR)
  .filter((n) => n.startsWith('sdk-') && n !== 'sdk-transport')
  .filter((n) => statSync(join(PACKAGES_DIR, n)).isDirectory());

describe('sdk-001 package structure', () => {
  it('has at least one sdk-* package besides transport', () => {
    expect(SDK_PACKAGES.length).toBeGreaterThan(0);
  });

  it('sdk-transport package exists with required exports', () => {
    const transportIndex = readFileSync(
      join(PACKAGES_DIR, 'sdk-transport', 'src', 'index.ts'),
      'utf8',
    );
    expect(transportIndex).toMatch(/provideDurionTransport/);
    expect(transportIndex).toMatch(/DurionTransportInterceptor/);
    expect(transportIndex).toMatch(/DURION_SDK_CONFIG/);
    expect(transportIndex).toMatch(/DurionSdkError/);
  });

  describe.each(SDK_PACKAGES)('%s', (pkg) => {
    const pkgDir = join(PACKAGES_DIR, pkg);

    it('has src/index.ts', () => {
      expect(existsSync(join(pkgDir, 'src', 'index.ts'))).toBe(true);
    });

    it('has root index.ts re-exporting apis (and models when present)', () => {
      const root = readFileSync(join(pkgDir, 'index.ts'), 'utf8');
      expect(root).toMatch(/apis\/api/);
      const modelsPath = join(pkgDir, 'src', 'models', 'models.ts');
      if (existsSync(modelsPath)) {
        const modelsContent = readFileSync(modelsPath, 'utf8').trim();
        const hasRealModels = modelsContent.length > 0 && modelsContent !== 'export {};';
        if (hasRealModels) {
          expect(root).toMatch(/models\/models/);
        }
      }
    });

    it('declares @durion-sdk/transport as a peer dependency', () => {
      const pkgJson = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8'));
      const peers = pkgJson.peerDependencies ?? {};
      expect(peers['@durion-sdk/transport']).toBeDefined();
    });

    it('exposes provideApi via the package surface', () => {
      expect(existsSync(join(pkgDir, 'src', 'apis', 'api.ts'))).toBe(true);
      expect(existsSync(join(pkgDir, 'provide-api.ts'))).toBe(true);
      const provideApi = readFileSync(join(pkgDir, 'provide-api.ts'), 'utf8');
      expect(provideApi).toMatch(/export function provideApi/);
    });

    it('does not retain legacy fetch-style runtime.ts', () => {
      expect(existsSync(join(pkgDir, 'src', 'runtime.ts'))).toBe(false);
    });
  });
});
