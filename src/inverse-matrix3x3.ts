export default function inverseMatrix3x3(m : Matrix3x3) {
    const a = m[0][0]
    const b = m[1][0]
    const c = m[2][0]
    const d = m[0][1]
    const e = m[1][1]
    const f = m[2][1]
    const g = m[0][2]
    const h = m[1][2]
    const i = m[2][2]

    const A = e * i - f * h
    const B = f * g - d * i
    const C = d * h - e * g
    const D = c * h - b * i
    const E = a * i - c * g
    const F = b * g - a * h
    const G = b * f - c * e
    const H = c * d - a * f
    const I = a * e - b * d

    const det = a * A + b * B + c * C

    return mul(1 / det, mat3(
        A, B, C,
        D, E, F,
        G, H, I,
    ))
}

import mat3 from './mat3'
import Matrix3x3 from './matrix3x3'
import mul from './multiply-number-matrix3x3'
