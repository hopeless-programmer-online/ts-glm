export default function matrix2x2FromMatrix4x4(m : Matrix3x3) : Matrix2x2 {
    return mat2(
        m[0][0], m[0][1],
        m[1][0], m[1][1],
    )
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import mat2 from './mat2'

