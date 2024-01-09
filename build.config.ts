import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // entries: [
  //   './src/extension.ts'
  // ],
  // ... other unbuild configuration
  // hooks: {
  //   'build:done': 
  //   () => {
  //     //'node ./postBuildScript.mjs'
  //     console.log('Build process completed.');
  //     import('./postBuildScript.mjs').catch(err => console.error(err));
  //     // Your post-build logic here
  //   }
  // },
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  },
  failOnWarn: false
});
