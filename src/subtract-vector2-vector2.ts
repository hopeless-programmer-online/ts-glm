export default function subtractVector2Vector2(a : Vector2, b : Vector2) : Vector2 {
    return new NumberVector2({
        x : a.x - b.x,
        y : a.y - b.y,
    })
}

import Vector2 from './vector2'
import NumberVector2 from './number-vector2'
