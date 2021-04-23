const { sin, cos } = Math

export default function rotate2(a : number) {
    const s = sin(a)
    const c = cos(a)

    return mat2([
        +c, -s,
        +s, +c,
    ])
}

import mat2 from './mat2'
