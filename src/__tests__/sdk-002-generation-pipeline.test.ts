import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(__dirname, '..', '..');

describe('sdk-002 generation pipeline', () => {
  const scriptPath = join(ROOT, 'scripts', 'generate-openapi.sh');

  it('generate-openapi.sh exists', () => {
    expect(existsSync(scriptPath)).toBe(true);
  });

  it('uses typescript-angular generator and contains required cleanups', () => {
    const script = readFileSync(scriptPath, 'utf8');
    expect(script).toMatch(/typescript-angular/);
    expect(script).toMatch(/cleanup_legacy_null_models/);
    expect(script).toMatch(/cleanup_legacy_fetch_apis/);
    expect(script).toMatch(/cleanup_orphan_js/);
    expect(script).toMatch(/patch_package_dependencies/);
  });

  it('openapitools.json exists and references typescript-angular generators', () => {
    const tools = JSON.parse(readFileSync(join(ROOT, 'openapitools.json'), 'utf8'));
    const generators = tools['generator-cli']?.generators ?? {};
    const generatorNames = Object.values(generators).map(
      (g: any) => g.generatorName as string,
    );
    expect(generatorNames.length).toBeGreaterThan(0);
    expect(generatorNames.every((n) => n === 'typescript-angular')).toBe(true);
  });
});
