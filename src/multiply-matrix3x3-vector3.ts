export default function multiplyMatrix3x3Vector3(m : Matrix3x3, v : Vector3) : Vector3 {
    return vec3(
        dot( m.rows[0], v ),
        dot( m.rows[1], v ),
        dot( m.rows[2], v ),
    )
}

import Matrix3x3 from './matrix3x3'
import Vector3 from './vector3'
import vec3 from './vec3'
import dot from './dot-vector3-vector3'

