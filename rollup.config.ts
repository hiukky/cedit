import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import filesize from 'rollup-plugin-filesize'

const ext = format => (format == 'dts' ? 'd.ts' : 'js')

const css = () =>
  postcss({
    minimize: true
  })

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
      : [
          esbuild({ minify: true, tsconfig: '.tsconfig.build.json' }),
          css(),
          filesize()
        ],
  external: id => !/^[./]/.test(id)
})

export default [bundle('es'), bundle('cjs'), bundle('dts')]
