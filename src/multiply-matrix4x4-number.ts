export default function multiplyMatrix4x4Number(a : Matrix4x4, b : number) : Matrix4x4 {
    return mat4(
        a[0][0] * b, a[0][1] * b, a[0][2] * b, a[0][3] * b,
        a[1][0] * b, a[1][1] * b, a[1][2] * b, a[1][3] * b,
        a[2][0] * b, a[2][1] * b, a[2][2] * b, a[2][3] * b,
        a[3][0] * b, a[3][1] * b, a[3][2] * b, a[3][3] * b,
    )
}

import Matrix4x4 from './matrix4x4'
import mat4 from './mat4'
