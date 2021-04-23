export default function addVector2Vector2(a : Vector2Components, b : Vector2Components) {
    const va = deduceVector2(a)
    const vb = deduceVector2(b)

    return new Vector2({ x : va.x + vb.x, y : va.y + vb.y })
}

import Vector2 from './vector2'
import Vector2Components from './vector2-components'
import deduceVector2 from './deduce-vector2'
