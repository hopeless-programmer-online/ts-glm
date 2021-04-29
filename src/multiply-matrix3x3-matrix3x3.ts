export default function multiplyMatrix3x3Matrix3x3(a : Matrix3x3, b : Matrix3x3) : Matrix3x3 {
    return mat3(
        dot( a.rows[0], b.columns[0] ), dot( a.rows[1], b.columns[0] ), dot( a.rows[2], b.columns[0] ),
        dot( a.rows[0], b.columns[1] ), dot( a.rows[1], b.columns[1] ), dot( a.rows[2], b.columns[1] ),
        dot( a.rows[0], b.columns[2] ), dot( a.rows[1], b.columns[2] ), dot( a.rows[2], b.columns[2] ),
    )
}

import Matrix3x3 from './matrix3x3'
import dot from './dot-vector3-vector3'
import mat3 from './mat3'

