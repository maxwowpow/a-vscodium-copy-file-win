// rollup.config.ts
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/extension.ts', // Your entry point file
  output: {
    file: 'dist/extension.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ],
};
