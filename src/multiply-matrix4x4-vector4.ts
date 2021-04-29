export default function multiplyMatrix4x4Vector4(m : Matrix4x4, v : Vector4) : Vector4 {
    return vec4(
        dot( m.rows[0], v ),
        dot( m.rows[1], v ),
        dot( m.rows[2], v ),
        dot( m.rows[3], v ),
    )
}

import Matrix4x4 from './matrix4x4'
import Vector4 from './vector4'
import vec4 from './vec4'
import dot from './dot-vector4-vector4'

