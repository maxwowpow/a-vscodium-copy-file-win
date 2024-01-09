import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(__dirname, 'dist', 'extension.cjs');
const targetFile = join(__dirname, 'dist', 'extension.js');

copyFileSync(sourceFile, targetFile);
