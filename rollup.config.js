const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = [{
  input: 'src/index.js',
  output: [{
      file: 'dist/eventBus.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/eventBus.amd.js',
      format: 'amd'
    },
    {
      file: 'dist/eventBus.es.js',
      format: 'es'
    },
    {
      name: 'eventbus',
      file: 'dist/eventBus.iife.js',
      format: 'iife'
    },
    {
      name: 'eventbus',
      file: 'dist/eventBus.umd.js',
      format: 'umd'
    },
    {
      file: 'dist/eventBus.system.js',
      format: 'system'
    }
  ],
  plugins: [
    commonjs(),
    resolve(),
    // babel({
    //   runtimeHelpers: true,
    // }),
    // uglify()
  ]
}];