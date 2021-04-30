export default function mat4(
    m00 : number, m01 : number, m02 : number, m03 : number,
    m10 : number, m11 : number, m12 : number, m13 : number,
    m20 : number, m21 : number, m22 : number, m23 : number,
    m30 : number, m31 : number, m32 : number, m33 : number,
) : Matrix4x4 {
    return new ArrayMatrix4x4({ values : [
        m00, m01, m02, m03,
        m10, m11, m12, m13,
        m20, m21, m22, m23,
        m30, m31, m32, m33,
    ] })
}

import ArrayMatrix4x4 from './array-matrix4x4'
import Matrix4x4 from './matrix4x4'
import transposeMatrix4x4 from './transpose-matrix4x4'

mat4.transpose = transposeMatrix4x4
