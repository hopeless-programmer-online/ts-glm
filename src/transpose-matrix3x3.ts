export default function transposeMatrix3x3(m : Matrix3x3) : Matrix3x3 {
    return mat3(
        m[0].x, m[1].x, m[2].x,
        m[0].y, m[1].y, m[2].y,
        m[0].z, m[1].z, m[2].z,
    )
}

import Matrix3x3 from './matrix3x3'
import mat3 from './mat3'
