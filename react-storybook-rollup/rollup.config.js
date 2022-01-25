import cssnano from 'cssnano';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import obfuscator from 'rollup-obfuscator';
import analyze from 'rollup-plugin-analyzer';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

import obConfig from './obfuscator.config.json';
import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'build/*' }),
      scss({
        output: 'build/style.css',
        outputStyle: 'compact',
        processor: (css) =>
          postcss({
            extract: true,
            plugins: [
              postcssPresetEnv({ stage: 2 }),
              cssnano({
                preset: 'default',
              }),
            ],
          })
            .process(css)
            .then((result) => result.css),
        failOnError: true,
      }),
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: ['**/__tests__/**', '__Template'],
        clean: true,
        typescript: require('ttypescript'),
        tsconfigDefaults: {
          compilerOptions: {
            plugins: [
              { transform: 'typescript-transform-paths' },
              { transform: 'typescript-transform-paths', afterDeclarations: true },
            ],
          },
        },
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render'],
          'node_modules/recharts/node_modules/react-is/index.js': ['isFragment'],
        },
      }),
      webWorkerLoader(),
      progress(),
      analyze({ summaryOnly: true }),
      obfuscator(obConfig),
    ],
  },
];
