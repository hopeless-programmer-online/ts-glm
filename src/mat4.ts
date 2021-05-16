export default function mat4(
    m00 : number, m01 : number, m02 : number, m03 : number,
    m10 : number, m11 : number, m12 : number, m13 : number,
    m20 : number, m21 : number, m22 : number, m23 : number,
    m30 : number, m31 : number, m32 : number, m33 : number,
) : Matrix4x4;
export default function mat4(m : Matrix4x4) : Matrix4x4;
export default function mat4(m : Matrix3x3) : Matrix4x4;
export default function mat4(m : Matrix2x2) : Matrix4x4;
export default function mat4() : Matrix4x4;

export default function mat4(
    m?   : Matrix4x4 | Matrix3x3 | Matrix2x2 | number, m01? : number, m02? : number, m03? : number,
    m10? : number,                                     m11? : number, m12? : number, m13? : number,
    m20? : number,                                     m21? : number, m22? : number, m23? : number,
    m30? : number,                                     m31? : number, m32? : number, m33? : number,
) : Matrix4x4 {
    if (m === undefined) return new ArrayMatrix4x4
    if (typeof m === 'number') return new ArrayMatrix4x4({ values : [
        m,   m01, m02, m03,
        m10, m11, m12, m13,
        m20, m21, m22, m23,
        m30, m31, m32, m33,
    ] })
    // @todo: replace with clone()
    if ('3' in m) return m.clone()
    if ('2' in m) return matrix4x4FromMatrix3x3(m)

    return matrix4x4FromMatrix2x2(m)
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import ArrayMatrix4x4 from './array-matrix4x4'
import transposeMatrix4x4 from './transpose-matrix4x4'
import matrix4x4FromMatrix3x3 from './matrix4x4-from-matrix3x3'
import matrix4x4FromMatrix2x2 from './matrix4x4-from-matrix2x2'

mat4.transpose = transposeMatrix4x4
