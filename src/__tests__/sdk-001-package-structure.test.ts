import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(__dirname, '..', '..');
const PACKAGES_DIR = join(ROOT, 'packages');

const SDK_PACKAGES = readdirSync(PACKAGES_DIR)
  .filter((n) => n.startsWith('sdk-') && n !== 'sdk-transport')
  .filter((n) => statSync(join(PACKAGES_DIR, n)).isDirectory());

const EXPECTED_GATEWAY_BASE_PATHS: Record<string, string> = {
  'sdk-accounting': 'http://api-gateway.local/accounting',
  'sdk-bulk-loader': 'http://api-gateway.local/bulk-loader',
  'sdk-catalog': 'http://api-gateway.local/catalog',
  'sdk-customer': 'http://api-gateway.local/customer',
  'sdk-event-receiver': 'http://api-gateway.local/event-receiver',
  'sdk-image': 'http://api-gateway.local/image',
  'sdk-inquiry': 'http://api-gateway.local/inquiry',
  'sdk-inventory': 'http://api-gateway.local/inventory',
  'sdk-invoice': 'http://api-gateway.local/invoice',
  'sdk-location': 'http://api-gateway.local/location',
  'sdk-order': 'http://api-gateway.local/order',
  'sdk-people': 'http://api-gateway.local/people',
  'sdk-price': 'http://api-gateway.local/price',
  'sdk-security': 'http://api-gateway.local/security-service',
  'sdk-shop-manager': 'http://api-gateway.local/shop-manager',
  'sdk-vehicle-fitment': 'http://api-gateway.local/vehicle-fitment',
  'sdk-vehicle-inventory': 'http://api-gateway.local/vehicle-inventory',
  'sdk-workorder': 'http://api-gateway.local/workorder',
};

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

    it('uses the expected gateway route prefix as the generated basePath default when browser-facing', () => {
      const expectedBasePath = EXPECTED_GATEWAY_BASE_PATHS[pkg];
      if (!expectedBasePath) {
        return;
      }

      const baseService = readFileSync(join(pkgDir, 'api.base.service.ts'), 'utf8');
      expect(baseService).toContain(`protected basePath = '${expectedBasePath}';`);
      expect(baseService).not.toContain('/v1/');
      expect(baseService).not.toContain('http://localhost:8086');
    });
  });
});
