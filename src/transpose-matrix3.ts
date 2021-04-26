export default function transposeMatrix3(m : Matrix3) {
    return mat3(
        m[0][0], m[1][0], m[2][0],
        m[0][1], m[1][1], m[2][1],
        m[0][2], m[1][2], m[2][2],
    )
}

import mat3 from './mat3'
import Matrix3 from './matrix3'
