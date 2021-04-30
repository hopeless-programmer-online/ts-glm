export default function matrix4x4FromMatrix3x3(m : Matrix3x3) : Matrix4x4 {
    return mat4(
        m[0][0], m[0][1], m[0][2], 0,
        m[1][0], m[1][1], m[1][2], 0,
        m[2][0], m[2][1], m[2][2], 0,
        0,       0,       0,       1,
    )
}

import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import mat4 from './mat4'
