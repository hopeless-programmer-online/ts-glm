export default function mat3(
    m00 : number, m01 : number, m02 : number,
    m10 : number, m11 : number, m12 : number,
    m20 : number, m21 : number, m22 : number,
) : Matrix3x3;
export default function mat3(m : Matrix4x4) : Matrix3x3;
export default function mat3(m : Matrix3x3) : Matrix3x3;
export default function mat3(m : Matrix2x2) : Matrix3x3;
export default function mat3() : Matrix3x3;

export default function mat3(
    m?   : Matrix4x4 | Matrix3x3 | Matrix2x2 | number, m01? : number, m02? : number,
    m10? : number,                                     m11? : number, m12? : number,
    m20? : number,                                     m21? : number, m22? : number,
) {
    if (m === undefined) return new ArrayMatrix3x3
    if (typeof m === 'number') return new ArrayMatrix3x3({ values : [
        m,   m01, m02,
        m10, m11, m12,
        m20, m21, m22,
    ] })
    if ('3' in m) return matrix3x3FromMatrix4x4(m)
    if ('2' in m) return mat3(
        m[0][0], m[0][1], m[0][2],
        m[1][0], m[1][1], m[1][2],
        m[2][0], m[2][1], m[2][2],
    )

    return matrix3x3FromMatrix2x2(m)
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import ArrayMatrix3x3 from './array-matrix3x3'
import transposeMatrix3x3 from './transpose-matrix3x3'
import matrix3x3FromMatrix4x4 from './matrix3x3-from-matrix4x4'
import matrix3x3FromMatrix2x2 from './matrix3x3-from-matrix2x2'

mat3.transpose = transposeMatrix3x3
