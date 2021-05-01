export default function multiplyVector2Number(a : Vector2, b : number) : Vector2 {
    return multiply(
        a,
        vec2(b),
    )
}

import Vector2 from './vector2'
import vec2 from './vec2'
import multiply from './multiply-vector2-vector2'
