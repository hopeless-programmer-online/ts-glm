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
    const vn = v.map(x => x + v.length)
    const vnList = vn.map(x => `${x}`).join(`, `)
    const iVList = v.map(x => `${x + v.length}`).join(`, `)
    const len = lv.reduce((a, x) => a + x**2, 0)**(1/2)
    const l = v.length + 1

    return [
        ...[
            { operation : `add`,      shortcut : `add`, sign : `+` },
            { operation : `subtract`, shortcut : `sub`, sign : `-` },
            { operation : `multiply`, shortcut : `mul`, sign : `*` },
            { operation : `divide`,   shortcut : `div`, sign : `/` },
        ].map(({ operation : op, shortcut : ops, sign }) => [
            { file : `${op}-${f}-${f}.ts`, content : `` +
                `export default function ${op}${n}${n}(a : ${n}, b : ${n}) : ${n} {\n` +
                `    return ${s}(\n` +
                c.map(x =>
                `        a.${x} ${sign} b.${x},\n`
                ).join(``) +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${n} from './${f}'\n` +
                `import ${s} from './${s}'\n` +
                ``
            },
            { file : `${op}-${f}-${f}.test.ts`, content : `` +
                `import { ${op}${n}${n} as ${ops}, ${s} } from './glm'\n` +
                `\n` +
                `it('should ${op} ${n} and ${n}', () => {\n` +
                `    expect(${ops}( ${s}(${vList}), ${s}(${vnList}) )).toMatchObject({\n` +
                c.map((x, i) =>
                `        ${x} : ${v[i]} ${sign} ${v[i] + v.length},\n`
                ).join(``) +
                `    })\n` +
                `})\n` +
                ``
            },
            { file : `${op}-${f}-number.ts`, content : `` +
                `export default function ${op}${n}Number(a : ${n}, b : number) : ${n} {\n` +
                `    return ${op}(\n` +
                `        a,\n` +
                `        ${s}(b),\n` +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${n} from './${f}'\n` +
                `import ${s} from './${s}'\n` +
                `import ${op} from './${op}-${f}-${f}'\n` +
                ``
            },
            { file : `${op}-${f}-number.test.ts`, content : `` +
                `import { ${op}${n}Number as ${ops}, ${s} } from './glm'\n` +
                `\n` +
                `it('should ${op} ${n} and number', () => {\n` +
                `    expect(${ops}(\n` +
                `        ${s}(${vList}),\n` +
                `        ${v.length + 1},\n` +
                `    )).toMatchObject({\n` +
                c.map((x, i) =>
                `        ${x} : ${v[i]} ${sign} ${v.length + 1},\n`
                ).join(``) +
                `    })\n` +
                `})\n` +
                ``
            },
            { file : `${op}-number-${f}.ts`, content : `` +
                `export default function ${op}Number${n}(a : number, b : ${n}) : ${n} {\n` +
                `    return ${op}(\n` +
                `        ${s}(a),\n` +
                `        b,\n` +
                `    )\n` +
                `}\n` +
                `\n` +
                `import ${n} from './${f}'\n` +
                `import ${s} from './${s}'\n` +
                `import ${op} from './${op}-${f}-${f}'\n` +
                ``
            },
            { file : `${op}-number-${f}.test.ts`, content : `` +
                `import { ${op}Number${n} as ${ops}, ${s} } from './glm'\n` +
                `\n` +
                `it('should ${op} number and ${n}', () => {\n` +
                `    expect(${ops}(\n` +
                `        ${v.length + 1},\n` +
                `        ${s}(${vList}),\n` +
                `    )).toMatchObject({\n` +
                c.map((x, i) =>
                `        ${x} : ${v.length + 1} ${sign} ${v[i]},\n`
                ).join(``) +
                `    })\n` +
                `})\n` +
                ``
            },
        ]).flat(),
        { file : `negate-${f}.ts`, content : `` +
            `export default function negate${n}(a : ${n}) {\n` +
            `    return sub(vec(0), a)\n` +
            `}\n` +
            `\n` +
            `import ${n} from './${f}'\n` +
            `import vec from './${s}'\n` +
            `import sub from './subtract-${f}-${f}'\n` +
            ``
        },
        { file : `negate-${f}.test.ts`, content : `` +
            `import { negate${n} as neg, ${s} } from './glm'\n` +
            `\n` +
            `it('should negate ${n}', () => {\n` +
            `    expect(neg(${s}(${vList}))).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : -${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            ``
        },
        { file : `dot-${f}-${f}.ts`, content : `` +
            `export default function dot${n}${n}(a : ${n}, b : ${n}) : number {\n` +
            `    return ${c.map(x => `a.${x} * b.${x}`).join(` + `)}\n` +
            `}\n` +
            `\n` +
            `import ${n} from './${f}'\n` +
            ``
        },
        { file : `dot-${f}-${f}.test.ts`, content : `` +
            `import { dot${n}${n} as dot, ${s} } from './glm'\n` +
            `\n` +
            `it('should dot ${n} and ${n}', () => {\n` +
            `    expect(dot( ${s}(${vList}), ${s}(${vnList}) )).toBe(${v.map((x, i) => `${x} * ${vn[i]}`).join(` + `)})\n` +
            `})\n` +
            ``
        },
        { file : `square-${f}.ts`, content : `` +
            `export default function square${n}(a : ${n}) {\n` +
            `    return dot(a, a)\n` +
            `}\n` +
            `\n` +
            `import ${n} from './${f}'\n` +
            `import dot from './dot-${f}-${f}'\n` +
            ``
        },
        { file : `square-${f}.test.ts`, content : `` +
            `import { square${n} as sqr, ${s} } from './glm'\n` +
            `\n` +
            `it('should square ${s}', () => {\n` +
            `    expect(sqr(${s}(${vList}))).toBe(${v.map(x => `${x}**2`).join(` + `)})\n` +
            `})\n` +
            ``
        },
        { file : `array-${f}.ts`, content : `` +
            `import ${n} from './${f}'\n` +
            `\n` +
            `type Values = number[]\n` +
            `type Offset = number\n` +
            `type Stride = number\n` +
            `type Index  = ${c.map((_, i) => i).join(` | `)}\n` +
            `\n` +
            `export default class Array${n} extends ${n} {\n` +
            `    public static default = {\n` +
            `        ...${n}.default,\n` +
            `        values : [ ${c.map(x => `${n}.default.${x}`).join(`, `)} ],\n` +
            `        offset : 0,\n` +
            `        stride : 1,\n` +
            `    }\n` +
            `    public static index = {\n` +
            c.map((x, i) =>
            `        ${x} : ${i} as Index,\n`
            ).join(``) +
            `    }\n` +
            `\n` +
            `    private readonly values : Values\n` +
            `    private readonly offset : Offset\n` +
            `    private readonly stride : Stride\n` +
            `\n` +
            `    public constructor({ values, offset = Array${n}.default.offset, stride = Array${n}.default.stride } : { values? : Values, offset? : Offset, stride? : Stride } = {}) {\n` +
            `        if (!values) values = Array${n}.default.values.slice()\n` +
            `\n` +
            `        super()\n` +
            `\n` +
            `        this.values = values\n` +
            `        this.offset = offset\n` +
            `        this.stride = stride\n` +
            `    }\n` +
            `\n` +
            c.map(x =>
            `    public get ${x}() {\n` +
            `        return this.getByIndex(Array${n}.index.${x})\n` +
            `    }\n` +
            `    public set ${x}(${x} : number) {\n` +
            `        this.setByIndex(Array${n}.index.${x}, ${x})\n` +
            `    }\n`
            ).join(``) +
            `\n` +
            `    private getByIndex(index : Index) {\n` +
            `        const { values, offset, stride } = this\n` +
            `\n` +
            `        return values[offset + stride * index]\n` +
            `    }\n` +
            `    private setByIndex(index : Index, value : number) {\n` +
            `        const { values, offset, stride } = this\n` +
            `\n` +
            `        values[offset + stride * index] = value\n` +
            `    }\n` +
            `}\n` +
            ``
        },
        { file : `array-${f}.test.ts`, content : `` +
            `import { Array${n}, ${n} } from './glm'\n` +
            `\n` +
            `it('should export default values', () => {\n` +
            `    expect(Array${n}.default).toMatchObject({\n` +
            `        values : [ ${c.map(x => `${n}.default.${x}`).join(`, `)} ],\n` +
            `        offset : 0,\n` +
            `        stride : 1,\n` +
            `    })\n` +
            `})\n` +
            `it('should has constructor()', () => {\n` +
            `    const v = new Array${n}\n` +
            `\n` +
            c.map(x =>
            `    expect(v.${x}).toBe(${n}.default.${x})\n`
            ).join(``) +
            `})\n` +
            `it('should has constructor({})', () => {\n` +
            `    const v = new Array${n}({})\n` +
            `\n` +
            c.map(x =>
            `    expect(v.${x}).toBe(${n}.default.${x})\n`
            ).join(``) +
            `})\n` +
            `it('should has constructor({ values })', () => {\n` +
            `    const values = [ ${vList} ]\n` +
            `    const v = new Array${n}({ values })\n` +
            `\n` +
            c.map((x, i) =>
            `    expect(v.${x}).toBe(${v[i]})\n`
            ).join(``) +
            `})\n` +
            `it('should has constructor({ values, offset })', () => {\n` +
            `    const values = [ ${vList} ]\n` +
            `    const v = new Array${n}({ values, offset : 0 })\n` +
            `\n` +
            c.map((x, i) =>
            `    expect(v.${x}).toBe(${v[i]})\n`
            ).join(``) +
            `})\n` +
            `it('should has constructor({ values, stride })', () => {\n` +
            `    const values = [ ${vList} ]\n` +
            `    const v = new Array${n}({ values, stride : 1 })\n` +
            `\n` +
            c.map((x, i) =>
            `    expect(v.${x}).toBe(${v[i]})\n`
            ).join(``) +
            `})\n` +
            `it('should has constructor({ values, offset, stride })', () => {\n` +
            `    const values = [ ${vList} ]\n` +
            `    const v = new Array${n}({ values, offset : 0, stride : 1 })\n` +
            `\n` +
            c.map((x, i) =>
            `    expect(v.${x}).toBe(${v[i]})\n`
            ).join(``) +
            `})\n` +
            c.map((x, i) =>
            `it('should has ${x} setter', () => {\n` +
            `    const values = [ ${vList} ]\n` +
            `    const v = new Array${n}({ values, offset : 0, stride : 1 })\n` +
            `\n` +
            `    v.${x} = ${l}\n` +
            `\n` +
            `    expect(v.${x}).toBe(${l})\n` +
            `    expect(values).toMatchObject([ ${v.map((x, j) => i === j ? l : x).join(`, `)} ])\n` +
            `})\n`
            ).join(``) +
            `it('vectors created with default constructor should refer to different values', () => {\n` +
            `    const a = new Array${n}\n` +
            `    const b = new Array${n}\n` +
            `\n` +
            c.map((x, i) =>
            `    a.${x} = ${defaults[x] + i + 1}\n`
            ).join(``) +
            `\n` +
            `    expect(a).toMatchObject({ ${c.map((x, i) => `${x} : ${defaults[x] + i + 1}`).join(`, `)} })\n` +
            `    expect(b).toMatchObject({ ${c.map(x => `${x} : ${defaults[x]}`).join(`, `)} })\n` +
            `})\n` +
            ``
        },
        { file : `${s}.test.ts`, content : `` +
            `import { ${s}, ${n} } from './glm'\n` +
            `\n` +
            `it('should export default', () => {\n` +
            `    expect(${s}.default).toMatchObject(${n}.default)\n` +
            `})\n` +
            `it('should accept nothing', () => {\n` +
            `    expect(${s}()).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${n}.default.${x},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should accept single scalar', () => {\n` +
            `    expect(${s}(5)).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : 5,\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should accept ${list}', () => {\n` +
            `    expect(${s}(${vList})).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            c.map((x, i) =>
            `it('should accept { ${x} }', () => {\n` +
            `    expect(${s}({ ${x} : ${v[i]} })).toMatchObject({\n` +
            c.map(y => x === y ?
            `        ${x} : ${v[i]},\n` :
            `        ${y} : ${s}.default.${y},\n`
            ).join(``) +
            `    })\n` +
            `})\n`
            ).join(``) +
            `it('should accept { ${list} }', () => {\n` +
            `    expect(${s}({ ${c.map((x, i) => `${x} : ${v[i]}`).join(`, `)} })).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should accept {}', () => {\n` +
            `    expect(${s}({})).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${s}.default.${x},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            c.map((x, i) =>
            `it('should accept { ${i} }', () => {\n` +
            `    expect(${s}({ ${i} : ${v[i]} })).toMatchObject({\n` +
            c.map((y, j) => x === y ?
            `        ${x} : ${v[i]},\n` :
            `        ${y} : ${s}.default.${y},\n`
            ).join(``) +
            `    })\n` +
            `})\n`
            ).join(``) +
            `it('should accept { ${c.map((_, i) => `${i}`).join(`, `)} }', () => {\n` +
            `    expect(${s}({ ${c.map((_, i) => `${i} : ${v[i]}`).join(`, `)} })).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should accept [ ${c.map(() => `number`).join(`, `)} ]', () => {\n` +
            `    expect(${s}([ ${vList} ])).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should accept []', () => {\n` +
            `    expect(${s}([])).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${s}.default.${x},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            ``
        },
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
        { file : `number-${f}.test.ts`, content : `` +
            `import { Number${n}, ${n} } from './glm'\n` +
            `\n` +
            `it('should has constructor()', () => {\n` +
            `    expect(new Number${n}).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${n}.default.${x},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            `it('should has constructor({})', () => {\n` +
            `    expect(new Number${n}({})).toMatchObject({\n` +
            c.map(x =>
            `        ${x} : ${n}.default.${x},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            c.map((x, i) =>
            `it('should has constructor({ ${x} })', () => {\n` +
            `    expect(new Number${n}({ ${x} : ${v[i]} })).toMatchObject({\n` +
            c.map(y => x === y ?
            `        ${x} : ${v[i]},\n` :
            `        ${y} : ${n}.default.${y},\n`
            ).join(``) +
            `    })\n` +
            `})\n`
            ).join(``) +
            `it('should has constructor({ ${list} })', () => {\n` +
            `    expect(new Number${n}({ ${c.map((x, i) => `${x} : ${v[i]}`).join(`, `)} })).toMatchObject({\n` +
            c.map((x, i) =>
            `        ${x} : ${v[i]},\n`
            ).join(``) +
            `    })\n` +
            `})\n` +
            c.map(x =>
            `it('should has ${x} setter', () => {\n` +
            `    const v = new Number${n}\n` +
            `\n` +
            `    v.${x} = 5\n` +
            `\n` +
            `    expect(v).toMatchObject({\n` +
            c.map(y => x === y ?
            `        ${x} : 5,\n` :
            `        ${y} : ${n}.default.${y},\n`
            ).join(``) +
            `    })\n` +
            `})\n`
            ).join(``) +
            ``
        },
        { file : `number-${f}.ts`, content : `` +
            `import ${n} from './${f}'\n` +
            `\n` +
            `export default class Number${n} extends ${n} {\n` +
            c.map(x =>
            `    private _${x} : number\n`
            ).join(``) +
            `\n` +
            `    public constructor({ ${c.map(x => `${x} = ${n}.default.${x}`).join(`, `)} } : { ${c.map(x => `${x}? : number`).join(`, `)} } = {}) {\n` +
            `        super()\n` +
            `\n` +
            c.map(x =>
            `        this._${x} = ${x}\n`
            ).join(``) +
            `    }\n` +
            `\n` +
            c.map(x =>
            `    public get ${x}() {\n` +
            `        return this._${x}\n` +
            `    }\n` +
            `    public set ${x}(${x} : number) {\n` +
            `        this._${x} = ${x}\n` +
            `    }\n`
            ).join(``) +
            `}\n` +
            ``
        },
    ]
}).flat()

x.forEach(({ file, content }) => outputFileSync(join(__dirname, file), content))
