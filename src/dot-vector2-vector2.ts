export default function dotVector2Vector2(a : Vector2Components, b : Vector2Components) {
    const va = deduceVector2(a)
    const vb = deduceVector2(b)

    return va.x * vb.x + va.y * vb.y
}

import deduceVector2 from './deduce-vector2'
import Vector2Components from './vector2-components'
