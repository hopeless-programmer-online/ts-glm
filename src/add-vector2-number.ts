export default function addVector2Number(a : Vector2Components, b : number) {
    const { x, y } = deduceVector2(a)

    return new Vector2({ x : x + b, y : y + b })
}

import Vector2 from './vector2'
import Vector2Components from './vector2-components'
import deduceVector2 from './deduce-vector2'
