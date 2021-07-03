import { join } from 'path'
import { outputFileSync } from 'fs-extra'

const [ v2, v3, v4 ] = [ 2, 3, 4 ].map(n => ({
    components : [ `x`, `y`, `z`, `w` ].slice(0, n),
    values : [ 1, 2, 3, 4 ].slice(0, n),
    type : {
        name : `Vector${n}`,
        file : `vector${n}`,
    },
    shortcut : {
        name : `vec${n}`,
        file : `vec${n}`
    },
}));

const x = [ v2, v3, v4 ].map(({ components : c, values : v, type : { name : n, file : f }, shortcut : { name : s, file : sf } }) => {
    const list = c.map(x => `${x}`).join(`, `)

    return [
        { file : `${f}.ts`, content : `` +
            `export default abstract class ${n} {\n` +
            `    public static default = { ${c.map((x, i) => `${x} : ${i < 3 ? 0 : 1}`).join(`, `)} }\n` +
            `\n` +
            c.map(x =>
            `    public abstract get ${x}() : number\n` +
            `    public abstract set ${x}(${x} : number)\n`
            ).join(``) +
            `\n` +
            c.map((x, i) =>
            `    public get [${i}]() {\n` +
            `        return this.${x}\n` +
            `    }\n` +
            `    public set [${i}](${x} : number) {\n` +
            `        this.${x} = ${x}\n` +
            `    }\n`
            ).join(``) +
            `\n` +
            `    public get length() {\n` +
            `        return len(this)\n` +
            `    }\n` +
            `    public get len() {\n` +
            `        return len(this)\n` +
            `    }\n` +
            `    public get magnitude() {\n` +
            `        return len(this)\n` +
            `    }\n` +
            `    public get mag() {\n` +
            `        return len(this)\n` +
            `    }\n` +
            `    public get norm() {\n` +
            `        return len(this)\n` +
            `    }\n` +
            `    public get square() {\n` +
            `        return sqr(this)\n` +
            `    }\n` +
            `    public get sqr() {\n` +
            `        return this.square\n` +
            `    }\n` +
            `    public get negate() {\n` +
            `        return neg(this)\n` +
            `    }\n` +
            `    public get neg() {\n` +
            `        return this.negate\n` +
            `    }\n` +
            `\n` +
            `    public set(${c.map(x => `${x} : number`).join(`, `)}) {\n` +
            c.map(x =>
            `        this.${x} = ${x}\n`
            ).join(``) +
            `    }\n` +
            `    public clone() {\n` +
            `        const { ${list} } = this\n` +
            `\n` +
            `        return ${s}(${list})\n` +
            `    }\n` +
            `    public add(other : Like | number) {\n` +
            `        // casting to number is a hack to overcome overloading ambiguity\n` +
            `        return add(this, other as number)\n` +
            `    }\n` +
            `    public subtract(other : Like | number) {\n` +
            `        // casting to number is a hack to overcome overloading ambiguity\n` +
            `        return sub(this, other as number)\n` +
            `    }\n` +
            `    public sub(other : Like | number) {\n` +
            `        return this.subtract(other)\n` +
            `    }\n` +
            `    public multiply(other : Like | number) {\n` +
            `        // casting to number is a hack to overcome overloading ambiguity\n` +
            `        return mul(this, other as number)\n` +
            `    }\n` +
            `    public mul(other : Like | number) {\n` +
            `        return this.multiply(other)\n` +
            `    }\n` +
            `    public divide(other : Like | number) {\n` +
            `        // casting to number is a hack to overcome overloading ambiguity\n` +
            `        return div(this, other as number)\n` +
            `    }\n` +
            `    public div(other : Like | number) {\n` +
            `        return this.divide(other)\n` +
            `    }\n` +
            `    public dot(other : Like) {\n` +
            `        return dot(this, other)\n` +
            `    }\n` +
            `    public toArray() : Array {\n` +
            `        const { ${list} } = this\n` +
            `\n` +
            `        return [ ${list} ]\n` +
            `    }\n` +
            `    public toString() {\n` +
            `        const { ${list} } = this\n` +
            `\n` +
            `        return \`${n} { ${c.map(x => `${x} : \${${x}}`).join(`, `)} }\`\n` +
            `    }\n` +
            `}\n` +
            `\n` +
            `import Like from './${f}-like'\n` +
            `import Array from './${f}-array'\n` +
            `import ${s} from './${s}'\n` +
            `import neg from './negate'\n` +
            `import add from './add'\n` +
            `import sub from './subtract'\n` +
            `import mul from './multiply'\n` +
            `import div from './divide'\n` +
            `import len from './length'\n` +
            `import sqr from './square'\n` +
            `import dot from './dot'\n` +
            ``
        },
    ]
}).flat()

x.forEach(({ file, content }) => outputFileSync(join(__dirname, file), content))
