export default function multiplyMatrix2Vector2(a : Matrix2, b : Vector2) {
    return vec2(a.rows[0].dot(b), a.rows[1].dot(b))
}

import vec2 from './vec2'
import Vector2 from './vector2'
import Matrix2 from './matrix2'
