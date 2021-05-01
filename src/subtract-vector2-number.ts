export default function subtractVector2Number(a : Vector2, b : number) : Vector2 {
    return subtract(
        a,
        vec2(b),
    )
}

import Vector2 from './vector2'
import vec2 from './vec2'
import subtract from './subtract-vector2-vector2'
