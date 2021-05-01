export default function subtractNumberVector2(a : number, b : Vector2) : Vector2 {
    return subtract(
        vec2(a),
        b,
    )
}

import Vector2 from './vector2'
import vec2 from './vec2'
import subtract from './subtract-vector2-vector2'
