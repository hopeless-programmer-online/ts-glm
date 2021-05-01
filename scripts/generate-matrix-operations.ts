import { join, dirname } from 'path'
import { existsSync, writeFileSync, mkdirSync } from 'fs'
import { outputFileSync } from 'fs-extra'

const types : [ string, string, string, string[][] ][] = [
    [ 'Matrix2x2', 'mat2', 'matrix2x2', [
        [ 'x', 'y' ],
        [ 'x', 'y' ],
    ] ],
    [ 'Matrix3x3', 'mat3', 'matrix3x3', [
        [ 'x', 'y', 'z' ],
        [ 'x', 'y', 'z' ],
        [ 'x', 'y', 'z' ],
    ] ],
    [ 'Matrix4x4', 'mat4', 'matrix4x4', [
        [ 'x', 'y', 'z', 'w' ],
        [ 'x', 'y', 'z', 'w' ],
        [ 'x', 'y', 'z', 'w' ],
        [ 'x', 'y', 'z', 'w' ],
    ] ],
]
const operations = [
    [ 'add', '+' ],
    [ 'subtract', '-' ],
    [ 'multiply', '*' ],
    [ 'divide', '/' ],
]

const list =
    operations.map(([ operation, sign ]) =>
        types.map(([ name, short, file, components ]) => [
            [ `${operation}-number-${file}`,
                `export default function ${operation}Number${name}(a : number, b : ${name}) : ${name} {\n` +
                `    return ${short}(\n` +
                components.map((column, x) =>
                `        ` + column.map((_, y) => `a ${sign} b[${x}][${y}],`).join(' ') + '\n'
                ).join('') +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${name} from './${file}'\n` +
                `import ${short} from './${short}'\n` +
                ``
            ],
            [ `${operation}-number-${file}.test`,
                `import { ${operation}Number${name} as op, ${short} } from './glm'\n` +
                `\n` +
                `it('should ${operation} number and ${name}', () => {\n` +
                `    expect(op(\n` +
                `        20,\n` +
                `        ${short}(\n` +
                components.map((column, x) =>
                `            ` + column.map((_, y) => `${x * column.length + y + 1},`).join(' ') + '\n'
                ).join('') +
                `        ),\n` +
                `    )).toMatchObject({\n` +
                components.map((column, x) =>
                `        ${x} : { ${column.map((component, y) => `${component} : 20 ${sign} ${x * column.length + y + 1}`).join(', ')} },\n`
                ).join('') +
                `    })\n` +
                `})\n` +
                `\n` +
                ``
            ],
            [ `${operation}-${file}-number`,
                `export default function ${operation}${name}Number(a : ${name}, b : number) : ${name} {\n` +
                `    return ${short}(\n` +
                components.map((column, x) =>
                `        ` + column.map((_, y) => `a[${x}][${y}] ${sign} b,`).join(' ') + '\n'
                ).join('') +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${name} from './${file}'\n` +
                `import ${short} from './${short}'\n` +
                ``
            ],
            [ `${operation}-${file}-number.test`,
                `import { ${operation}${name}Number as op, ${short} } from './glm'\n` +
                `\n` +
                `it('should ${operation} ${name} and number', () => {\n` +
                `    expect(op(\n` +
                `        ${short}(\n` +
                components.map((column, x) =>
                `            ` + column.map((_, y) => `${x * column.length + y + 1},`).join(' ') + '\n'
                ).join('') +
                `        ),\n` +
                `        20,\n` +
                `    )).toMatchObject({\n` +
                components.map((column, x) =>
                `        ${x} : { ${column.map((component, y) => `${component} : ${x * column.length + y + 1} ${sign} 20`).join(', ')} },\n`
                ).join('') +
                `    })\n` +
                `})\n` +
                `\n` +
                ``
            ],
        ])
    ).flat(2)

// console.log(list)

outputFileSync(join(__dirname, '../src-auto/glm.ts'), operations.map(([ operation ]) =>
    types.map(([ name, _, file ]) => [
        `export { default as ${operation}Number${name} } from './${operation}-number-${file}'\n`,
        `export { default as ${operation}${name}Number } from './${operation}-${file}-number'\n`,
    ])
).flat(2).join(''), {  })
outputFileSync(join(__dirname, '../src-auto/glm.test.ts'), operations.map(([ operation ]) =>
    types.map(([ name, _, file ]) => [
        `import ${operation}Number${name} from './${operation}-number-${file}'\n` +
        `\n` +
        `it('should export ${operation}Number${name}', () => {\n` +
        `    expect(glm).toHaveProperty('${operation}Number${name}', ${operation}Number${name})\n` +
        `})\n` +
        ``,
        `import ${operation}${name}Number from './${operation}-${file}-number'\n` +
        `\n` +
        `it('should export ${operation}${name}Number', () => {\n` +
        `    expect(glm).toHaveProperty('${operation}${name}Number', ${operation}${name}Number)\n` +
        `})\n` +
        ``,
    ])
).flat(2).join('\n'), {  })

for (const [ file, content ] of list) {
    outputFileSync(join(__dirname, `../src-auto/${file}.ts`), content)
}

// writeFileSync(file, text)
