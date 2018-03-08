import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
export default {
  input: 'node-binance-api.js',
  output: {
    name: 'binance',
    file: 'node-binance-api-module.js',
    format: 'iife'
  },
  plugins: [

    commonjs({

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false
    }),
    builtins(),
    json({preferConst: true}),
    resolve()
  ]
}
