export default function matrix4x4FromMatrix2x2(m : Matrix2x2) : Matrix4x4 {
    return mat4(
        m[0][0], m[0][1], 0, 0,
        m[1][0], m[1][1], 0, 0,
        0,       0,       1, 0,
        0,       0,       0, 1,
    )
}

import Matrix4x4 from './matrix4x4'
import Matrix2x2 from './matrix2x2'
import mat4 from './mat4'
