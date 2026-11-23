// File helpers shared by the scripts that add a secondary entry point
// (`@durion-sdk/<pkg>/<entry>`) to a generated package.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** Writes only when the content differs, so an unchanged run leaves mtimes alone. */
export function writeIfChanged(path, content) {
  if (existsSync(path) && readFileSync(path, 'utf8') === content) return;
  writeFileSync(path, content);
}

/**
 * Writes `<packageDir>/<entry>/` as an ng-packagr secondary entry point:
 * `files` (name -> content), an index.ts re-exporting each of them, and the
 * ng-package.json that makes ng-packagr build it as its own module.
 */
export function writeSecondaryEntry(packageDir, entry, files) {
  const entryDir = join(packageDir, entry);
  mkdirSync(entryDir, { recursive: true });
  for (const [name, content] of Object.entries(files)) {
    writeIfChanged(join(entryDir, `${name}.ts`), content);
  }
  writeIfChanged(
    join(entryDir, 'index.ts'),
    Object.keys(files)
      .map((name) => `export * from './${name}';\n`)
      .join(''),
  );
  writeIfChanged(
    join(entryDir, 'ng-package.json'),
    `${JSON.stringify(
      { $schema: '../node_modules/ng-packagr/ng-package.schema.json', lib: { entryFile: 'index.ts' } },
      null,
      2,
    )}\n`,
  );
}

/**
 * Makes an index file re-export a secondary entry point.
 *
 * The client generator rewrites a package's index.ts, and generate-openapi.sh
 * its src/index.ts, on every run, and neither knows the entry points added
 * here, so the line is put back after each run. By package name, never by
 * relative path: a relative import would compile a second copy of the entry's
 * contents into the primary bundle.
 */
export function ensureExport(indexPath, specifier) {
  if (!existsSync(indexPath)) return;
  const line = `export * from '${specifier}';`;
  const lines = readFileSync(indexPath, 'utf8').split('\n');
  if (lines.includes(line)) return;
  const kept = lines.filter((existing) => existing.trim() !== 'export {};').join('\n');
  writeFileSync(indexPath, `${kept}${kept === '' || kept.endsWith('\n') ? '' : '\n'}${line}\n`);
}
