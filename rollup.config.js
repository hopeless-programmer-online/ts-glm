import dts from 'rollup-plugin-dts'

export default [
    {
        input: '.ts/glm.d.ts',
        output: {
            file: 'dist/glm.d.ts',
            format: 'es',
        },
        plugins: [ dts() ],
    },
]
