export default function addNumberVector2(a : number, b : Vector2Components) {
    const { x, y } = deduceVector2(b)

    return new Vector2({ x : a + x, y : a + y })
}

import Vector2 from './vector2'
import Vector2Components from './vector2-components'
import deduceVector2 from './deduce-vector2'
