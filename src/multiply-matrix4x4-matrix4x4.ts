export default function multiplyMatrix4x4Matrix4x4(a : Matrix4x4, b : Matrix4x4) : Matrix4x4 {
    return mat4(
        dot( a.rows[0], b.columns[0] ), dot( a.rows[1], b.columns[0] ), dot( a.rows[2], b.columns[0] ), dot( a.rows[3], b.columns[0] ),
        dot( a.rows[0], b.columns[1] ), dot( a.rows[1], b.columns[1] ), dot( a.rows[2], b.columns[1] ), dot( a.rows[3], b.columns[1] ),
        dot( a.rows[0], b.columns[2] ), dot( a.rows[1], b.columns[2] ), dot( a.rows[2], b.columns[2] ), dot( a.rows[3], b.columns[2] ),
        dot( a.rows[0], b.columns[3] ), dot( a.rows[1], b.columns[3] ), dot( a.rows[2], b.columns[3] ), dot( a.rows[3], b.columns[3] ),
    )
}

import Matrix4x4 from './matrix4x4'
import dot from './dot-vector4-vector4'
import mat4 from './mat4'

