export default function matrix3x3FromMatrix2x2(m : Matrix2x2) : Matrix3x3 {
    return mat3(
        m[0][0], m[0][1], 0,
        m[1][0], m[1][1], 0,
        0,       0,       1,
    )
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import mat3 from './mat3'
