export default function mat2(
    m00 : number, m01 : number,
    m10 : number, m11 : number,
) : Matrix2x2;
export default function mat2(m : Matrix4x4) : Matrix2x2;
export default function mat2(m : Matrix3x3) : Matrix2x2;
export default function mat2(m : Matrix2x2) : Matrix2x2;
export default function mat2() : Matrix2x2;

export default function mat2(
    m?   : Matrix4x4 | Matrix3x3 | Matrix2x2 | number, m01? : number,
    m10? : number,                                     m11? : number,
) {
    if (m === undefined) return new ArrayMatrix2x2
    if (typeof m === 'number') return new ArrayMatrix2x2({ values : [
        m,   m01,
        m10, m11,
    ] })
    if ('3' in m) return matrix2x2FromMatrix4x4(m)
    if ('2' in m) return matrix2x2FromMatrix3x3(m)

    return mat2(
        m[0][0], m[0][1],
        m[1][0], m[1][1],
    )
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import ArrayMatrix2x2 from './array-matrix2x2'
import matrix2x2FromMatrix3x3 from './matrix2x2-from-matrix3x3'
import matrix2x2FromMatrix4x4 from './matrix2x2-from-matrix4x4'
import transposeMatrix2x2 from './transpose-matrix2x2'

mat2.transpose = transposeMatrix2x2
