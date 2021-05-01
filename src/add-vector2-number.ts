export default function addVector2Number(a : Vector2, b : number) : Vector2 {
    return add(
        a,
        vec2(b),
    )
}

import Vector2 from './vector2'
import vec2 from './vec2'
import add from './add-vector2-vector2'
