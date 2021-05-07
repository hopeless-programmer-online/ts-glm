import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

export default [
    {
        input: 'src/glm.ts',
        output: {
            file: 'dist/glm.js',
            format: 'cjs',
        },
        plugins: [ typescript() ],
    },
    {
        input: '.ts/glm.d.ts',
        output: {
            file: 'dist/glm.d.ts',
            format: 'es',
        },
        plugins: [ dts() ],
    },
]
