import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(__dirname, '..', '..');
const PACKAGES_DIR = join(ROOT, 'packages');

type GuardModel = {
  packageName: string;
  file: string;
  classname: string;
  /** Property names declared as `string` / `string | null` on the interface. */
  stringProperties: string[];
  /** Property names listed in the generated `optionalStringProperties` guard bucket. */
  guardedStringProperties: string[];
};

/**
 * Parses every generated model that emits an `instanceOf*` guard, pairing the
 * interface's string-typed properties with the guard's string bucket.
 *
 * `typescript-angular` maps `format: date` and `format: date-time` to `string`,
 * so those properties must appear in the guard bucket alongside plain strings.
 */
function readGuardModels(): GuardModel[] {
  const models: GuardModel[] = [];

  for (const packageName of readdirSync(PACKAGES_DIR)) {
    const modelsDir = join(PACKAGES_DIR, packageName, 'src', 'models');
    if (!existsSync(modelsDir) || !statSync(modelsDir).isDirectory()) continue;

    for (const file of readdirSync(modelsDir).filter((f) => f.endsWith('.ts'))) {
      const source = readFileSync(join(modelsDir, file), 'utf8');
      const interfaceRe = /export interface (\w+)[^{]*\{([\s\S]*?)\n\}/g;

      let iface: RegExpExecArray | null;
      while ((iface = interfaceRe.exec(source))) {
        const [, classname, body] = iface;
        const bucket = new RegExp(
          `const optionalStringProperties = create${classname}OptionalProperties\\(([^;]*)\\);`,
        ).exec(source);
        if (!bucket) continue;

        const stringProperties: string[] = [];
        const propertyRe = /^\s{4}(?:readonly\s+)?'?([A-Za-z_$][\w$]*)'?\??:\s*([^;]+);\s*$/gm;
        let property: RegExpExecArray | null;
        while ((property = propertyRe.exec(body))) {
          if (/^string(\s*\|\s*null)?$/.test(property[2].trim())) stringProperties.push(property[1]);
        }

        models.push({
          packageName,
          file,
          classname,
          stringProperties,
          guardedStringProperties: [...bucket[1].matchAll(/name: '([^']+)'/g)].map((m) => m[1]),
        });
      }
    }
  }

  return models;
}

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
    expect(script).toMatch(/gateway_base_path_for_module/);
    expect(script).toMatch(/apply_gateway_base_path_default/);
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

  it('modelGeneric.mustache buckets date and date-time properties with strings', () => {
    const template = readFileSync(
      join(ROOT, 'templates', 'typescript-angular', 'modelGeneric.mustache'),
      'utf8',
    );
    const bucket = /const optionalStringProperties = .*/.exec(template);

    expect(bucket).not.toBeNull();
    expect(bucket![0]).toMatch(/\{\{#isDate\}\}\{ name: '\{\{name\}\}'/);
    expect(bucket![0]).toMatch(/\{\{#isDateTime\}\}\{ name: '\{\{name\}\}'/);
  });

  it('generated guards validate every string-typed property, including date-time fields', () => {
    const models = readGuardModels();
    expect(models.length).toBeGreaterThan(0);

    const gaps = models
      .map((m) => ({
        ...m,
        unguarded: m.stringProperties.filter((p) => !m.guardedStringProperties.includes(p)),
      }))
      .filter((m) => m.unguarded.length > 0)
      .map((m) => `${m.packageName}/${m.file} ${m.classname}: ${m.unguarded.join(', ')}`);

    expect(gaps).toEqual([]);
  });

  it('generated guards list each string property once, in declaration order', () => {
    const problems = readGuardModels()
      .filter((m) => {
        const guarded = m.guardedStringProperties;
        const duplicated = guarded.length !== new Set(guarded).size;
        const declared = guarded.filter((p) => m.stringProperties.includes(p));
        const inOrder = declared.every(
          (p, i) =>
            i === 0 ||
            m.stringProperties.indexOf(declared[i - 1]) < m.stringProperties.indexOf(p),
        );
        return duplicated || !inOrder;
      })
      .map((m) => `${m.packageName}/${m.file} ${m.classname}`);

    expect(problems).toEqual([]);
  });

  it('instanceOfPriceQuoteRequest rejects a non-string effectiveTimestamp', async () => {
    const { instanceOfPriceQuoteRequest } = await import(
      '../../packages/sdk-price/src/models/priceQuoteRequest'
    );
    const base = {
      productId: 'p-1',
      quantity: 2,
      locationId: 'loc-1',
      customerTierId: 'tier-1',
    };

    expect(instanceOfPriceQuoteRequest({ ...base })).toBe(true);
    expect(instanceOfPriceQuoteRequest({ ...base, effectiveTimestamp: '2026-08-11T00:00:00Z' })).toBe(
      true,
    );
    expect(instanceOfPriceQuoteRequest({ ...base, effectiveTimestamp: null })).toBe(true);
    expect(instanceOfPriceQuoteRequest({ ...base, effectiveTimestamp: 1754870400000 })).toBe(false);
    expect(instanceOfPriceQuoteRequest({ ...base, effectiveTimestamp: new Date() })).toBe(false);
  });
});
