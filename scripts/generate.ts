import { join, dirname } from 'path'
import { existsSync, writeFileSync, mkdirSync } from 'fs'
import { outputFileSync } from 'fs-extra'

const types : [ string, string, string, string[] ][] = [
    [ 'Vector2', 'vec2', 'vector2', [ 'x', 'y' ] ],
    [ 'Vector3', 'vec3', 'vector3', [ 'x', 'y', 'z' ] ],
    [ 'Vector4', 'vec4', 'vector4', [ 'x', 'y', 'z', 'w' ] ],
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
                `    return ${operation}(\n` +
                `        ${short}(a),\n` +
                `        b,\n` +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${name} from './${file}'\n` +
                `import ${short} from './${short}'\n` +
                `import ${operation} from './${operation}-${file}-${file}'\n` +
                ``
            ],
            [ `${operation}-number-${file}.test`,
                `import { ${operation}Number${name} as op, ${short} } from './glm'\n` +
                `\n` +
                `it('should ${operation} number and ${name}', () => {\n` +
                `    expect(op(\n` +
                `        5,\n` +
                `        ${short}(\n` +
                components.map((_, i) =>
                `            ${i + 1},\n`
                ).join('') +
                `        ),\n` +
                `    )).toMatchObject({\n` +
                components.map((x, i) =>
                `        ${x} : 5 ${sign} ${i + 1},\n`
                ).join('') +
                `    })\n` +
                `})\n` +
                `\n` +
                ``
            ],
            [ `${operation}-${file}-number`,
                `export default function ${operation}${name}Number(a : ${name}, b : number) : ${name} {\n` +
                `    return ${operation}(\n` +
                `        a,\n` +
                `        ${short}(b),\n` +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${name} from './${file}'\n` +
                `import ${short} from './${short}'\n` +
                `import ${operation} from './${operation}-${file}-${file}'\n` +
                ``
            ],
            [ `${operation}-${file}-number.test`,
                `import { ${operation}${name}Number as op, ${short} } from './glm'\n` +
                `\n` +
                `it('should ${operation} ${name} and number', () => {\n` +
                `    expect(op(\n` +
                `        ${short}(\n` +
                components.map((_, i) =>
                `            ${i + 1},\n`
                ).join('') +
                `        ),\n` +
                `        5,\n` +
                `    )).toMatchObject({\n` +
                components.map((x, i) =>
                `        ${x} : ${i + 1} ${sign} 5,\n`
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
).flat(2).join(''), {  })

for (const [ file, content ] of list) {
    outputFileSync(join(__dirname, `../src-auto/${file}.ts`), content)
}

// writeFileSync(file, text)
