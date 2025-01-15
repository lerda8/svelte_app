import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife',
    name: 'app'
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: true
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    })
  ]
};
