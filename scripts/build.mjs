// Bouwt src/ naar één zelfstandig bestand: index.html in de root van de repo.
// Gebruik: npm run build   (eenmalig)   of   npm run dev   (opnieuw bouwen bij elke wijziging)
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const watch = process.argv.includes('--watch');

const inline = {
  name: 'inline-html',
  setup(build) {
    build.onEnd((result) => {
      if (result.errors.length) return;
      const js = result.outputFiles.find((f) => f.path.endsWith('.js')).text.replace(/<\/script/gi, '<\\/script');
      const cssFile = result.outputFiles.find((f) => f.path.endsWith('.css'));
      const css = cssFile ? cssFile.text.replace(/<\/style/gi, '<\\/style') : '';
      const html = readFileSync(resolve(root, 'src/index.html'), 'utf8')
        .replace('/*__CSS__*/', () => css)
        .replace('/*__JS__*/', () => js);
      writeFileSync(resolve(root, 'index.html'), html);
      console.log(`index.html gebouwd (${Math.round(html.length / 1024)} KB)`);
    });
  },
};

const options = {
  entryPoints: [resolve(root, 'src/main.jsx')],
  bundle: true,
  minify: !watch,
  format: 'iife',
  jsx: 'automatic',
  target: ['es2020'],
  outdir: resolve(root, 'build'),
  write: false,
  define: { 'process.env.NODE_ENV': watch ? '"development"' : '"production"' },
  nodePaths: process.env.NODE_PATH ? process.env.NODE_PATH.split(':') : [],
  plugins: [inline],
  logLevel: 'warning',
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  console.log('Klaar voor wijzigingen… open index.html in je browser.');
} else {
  await esbuild.build(options);
}
