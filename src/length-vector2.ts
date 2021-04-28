export default function lengthVector2(v : Vector2) {
    return Math.sqrt(dotVector2Vector2(v, v))
}

import dotVector2Vector2 from './dot-vector2-vector2'
import Vector2 from './vector2'
