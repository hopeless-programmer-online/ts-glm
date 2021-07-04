import { join } from 'path'
import { outputFileSync } from 'fs-extra'

const [ v2, v3, v4 ] = [ 2, 3, 4 ].map(n => ({
    components : [ `x`, `y`, `z`, `w` ].slice(0, n),
    defaults : { x : 0, y : 0, z : 0, w : 1 },
    values : [ 1, 2, 3, 4 ].slice(0, n),
    lengthValues :
        n === 2 ? [ 3, 4 ]       :
        n === 3 ? [ 2, 3, 6 ]    :
                  [ 5, 5, 5, 5 ],
    type : {
        name : `Vector${n}`,
        file : `vector${n}`,
    },
    shortcut : {
        name : `vec${n}`,
        file : `vec${n}`
    },
}));

const x = [ v2, v3, v4 ].map(({
    components : c,
    values : v,
    defaults,
    lengthValues : lv,
    type : { name : n, file : f },
    shortcut : { name : s, file : sf },
}) => {
    const list = c.map(x => `${x}`).join(`, `)
    const vList = v.map(x => `${x}`).join(`, `)
    const iVList = v.map(x => `${x + v.length}`).join(`, `)
    const len = lv.reduce((a, x) => a + x**2, 0)**(1/2)

    return [
        { file : `${s}.ts`, content : `` +
            `export default function ${s}() : ${n};\n` +
            `export default function ${s}(source : ${n}Source) : ${n};\n` +
            `export default function ${s}(scalar : number) : ${n};\n` +
            `export default function ${s}(${c.map(x => `${x} : number`).join(`, `)}) : ${n};\n` +
            `\n` +
            `export default function ${s}(x? : ${n}Source | number, ${c.slice(1).map(x => `${x}? : number`).join(`, `)}) : ${n} {\n` +
            `    if (x === undefined) return new Number${n}\n` +
            `    if (y !== undefined) return new Number${n}({ x : x as number, ${c.slice(1).join(`, `)} })\n` +
            `    if (typeof x === 'number') return new Number${n}({ x, ${c.slice(1).map(x => `${x} : x`).join(`, `)} })\n` +
            `\n` +
            `    return ((v : ${n}Source) => {\n` +
            c.map((x, i) =>
            `        let ${x} = ${n}.default.${x}\n` +
            `\n` +
            `        if (\`${x}\` in v) {\n` +
            `            const v${x} = v.${x}\n` +
            `\n` +
            `            if (typeof v${x} === \`number\`) ${x} = v${x}\n` +
            `        }\n` +
            `        else if (${i} in v) {\n` +
            `            const v${i} = v[${i}]\n` +
            `\n` +
            `            if (typeof v${i} === \`number\`) ${x} = v${i}\n` +
            `        }\n` +
            `\n`
            ).join(``) +
            `        return new Number${n}({ ${c.join(`, `)} })\n` +
            `    })(x)\n` +
            `}\n` +
            `\n` +
            `import ${n}Source from './${f}-source'\n` +
            `import Number${n} from './number-${f}'\n` +
            `import ${n} from './${f}'\n` +
            `\n` +
            `${s}.default = ${n}.default\n` +
            ``
        },
        { file : `${f}-source.ts`, content : `` +
            `type ${n}Source =\n` +
            `    | {}\n` +
            c.map((x, i) =>
            `    | ({ ${x} : number } | { ${i} : number })\n`
            ).join(``) +
            `    | (${c.map((_, l) => `[ ${c.slice(0, l + 1).map(() => `number`).join(`, `)} ]`).join(` | `)} | number[])\n` +
            `\n` +
            `export default ${n}Source\n` +
            ``
        },
        { file : `${f}-array.ts`, content : `` +
            `type ${n}Array = [ ${c.map(() => `number`).join(`, `)} ]\n` +
            `\n` +
            `export default ${n}Array\n` +
            ``
        },
        { file : `${f}-like.ts`, content : `` +
            `type ${n}Like =\n` +
            `    | (\n` +
            c.map((x, i) =>
            `        & ({ ${x} : number } | { ${i} : number })\n`
            ).join(``) +
            `    )\n` +
            `    | [ ${c.map(() => `number`).join(`, `)} ]\n` +
            `\n` +
            `export default ${n}Like\n` +
            ``
        },
        { file : `${f}.ts`, content : `` +
            `export default abstract class ${n} {\n` +
            `    public static default = { ${c.map(x => `${x} : ${defaults[x]}`).join(`, `)} }\n` +
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
        { file : `${f}.test.ts`, content : `` +
            `import { ${s}, ${n} } from './glm'\n` +
            `\n` +
            `it('should export default values', () => {\n` +
            `    expect(${n}.default).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${defaults[x]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement index accessors', () => {\n` +
            `    const v = ${s}(${vList})\n` +
            `\n` +
            `    expect(v).toMatchObject({ ${v.map((x, i) => `${i} : ${x}`).join(`, `)} })\n` +
            `\n` +
            v.map((x, i) =>
            `    v[${i}] = ${x + v.length}\n`
            ).join(``) +
            `\n` +
            `    expect(v).toMatchObject({ ${v.map((x, i) => `${i} : ${x + v.length}`).join(`, `)} })\n` +
            `})\n` +
            `it('should implement length accessor', () => {\n` +
            `    expect(${s}(${lv.map(x => `${x}`).join(`, `)})).toMatchObject({\n` +
            `        length : ${len},\n` +
            `        len : ${len},\n` +
            `        magnitude : ${len},\n` +
            `        mag : ${len},\n` +
            `        norm : ${len},\n` +
            `    })\n` +
            `})\n` +
            `it('should implement square accessor', () => {\n` +
            `    expect(${s}(${vList})).toMatchObject({\n` +
            `        square : ${v.map(x => `${x}**2`).join(` + `)},\n` +
            `        sqr    : ${v.map(x => `${x}**2`).join(` + `)},\n` +
            `    })\n` +
            `})\n` +
            `it('should implement neg accessor', () => {\n` +
            `    expect(${s}(${vList})).toMatchObject({\n` +
            `        negate : { ${c.map((x, i) => `${x} : -${v[i]}`).join(`, `)} },\n` +
            `        neg    : { ${c.map((x, i) => `${x} : -${v[i]}`).join(`, `)} },\n` +
            `    })\n` +
            `})\n` +
            `it('should implement set()', () => {\n` +
            `    const v = ${s}(${vList})\n` +
            `\n` +
            `    v.set(${iVList})\n` +
            `\n` +
            `    expect(v).toMatchObject({ ${c.map((x, i) => `${x} : ${v[i] + v.length}`).join(`, `)} })\n` +
            `})\n` +
            `it('should implement clone()', () => {\n` +
            `    expect(${s}(${vList}).clone()).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement add()', () => {\n` +
            `    expect(${s}(${vList}).add([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} + ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement subtract()', () => {\n` +
            `    expect(${s}(${vList}).subtract([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} - ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement sub()', () => {\n` +
            `    expect(${s}(${vList}).sub([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} - ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement multiply()', () => {\n` +
            `    expect(${s}(${vList}).multiply([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} * ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement mul()', () => {\n` +
            `    expect(${s}(${vList}).mul([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} * ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement divide()', () => {\n` +
            `    expect(${s}(${vList}).divide([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} / ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement div()', () => {\n` +
            `    expect(${s}(${vList}).div([ ${iVList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]} / ${v[i] + v.length},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should implement dot()', () => {\n` +
            `    expect(${s}(${vList}).dot([ ${iVList} ])).toBe(${v.map(x => `${x} * ${x + v.length}`).join(` + `)})\n` +
            `})\n` +
            `it('should implement toArray()', () => {\n` +
            `    expect(${s}(${vList}).toArray()).toMatchObject([ ${vList} ])\n` +
            `})\n` +
            `it('should implement toString()', () => {\n` +
            `    expect(${s}(${vList}).toString()).toBe(\`${n} { ${c.map((x, i) => `${x} : ${v[i]}`).join(`, `)} }\`)\n` +
            `})\n` +
            ``
        },
    ]
}).flat()

x.forEach(({ file, content }) => outputFileSync(join(__dirname, file), content))
