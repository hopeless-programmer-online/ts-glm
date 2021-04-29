export default function multiplyMatrix2x2Vector2(m : Matrix2x2, v : Vector2) : Vector2 {
    return vec2(
        dot( m.rows[0], v ),
        dot( m.rows[1], v ),
    )
}

import Matrix2x2 from './matrix2x2'
import Vector2 from './vector2'
import vec2 from './vec2'
import dot from './dot-vector2-vector2'

