import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexFile = join(distDir, 'index.html');
const fallbackFile = join(distDir, '404.html');

if (!existsSync(indexFile)) {
  throw new Error('Cannot create GitHub Pages SPA fallback because dist/index.html is missing.');
}

copyFileSync(indexFile, fallbackFile);
console.log('Created dist/404.html for GitHub Pages SPA fallback.');

