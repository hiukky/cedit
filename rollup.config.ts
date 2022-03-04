import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import css from 'rollup-plugin-postcss'

const ext = format => (format == 'dts' ? 'd.ts' : 'js')

const bundle = format => ({
  input: 'src/index.ts',
  output: {
    file: `dist/index.${ext(format)}`,
    format: format == 'cjs' ? 'cjs' : 'es',
    sourcemap: false
  },
  plugins:
    format == 'dts'
      ? [dts(), css()]
      : [esbuild({ minify: true, tsconfig: '.tsconfig.build.json' }), css()],
  external: id => !/^[./]/.test(id)
})

export default [bundle('es'), bundle('cjs'), bundle('dts')]
