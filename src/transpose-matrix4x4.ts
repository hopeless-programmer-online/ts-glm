export default function transposeMatrix4x4(m : Matrix4x4) : Matrix4x4 {
    return mat4(
        m[0][0], m[1][0], m[2][0], m[3][0],
        m[0][1], m[1][1], m[2][1], m[3][1],
        m[0][2], m[1][2], m[2][2], m[3][2],
        m[0][3], m[1][3], m[2][3], m[3][3],
    )
}

import Matrix4x4 from './matrix4x4'
import mat4 from './mat4'
