export default function vec2() : Vector2;
export default function vec2(scalar) : Vector2;
export default function vec2(x : number, y : number) : Vector2;

export default function vec2(x? : number, y? : number) : Vector2 {
    if (x === undefined) return new NumberVector2
    if (y === undefined) return new NumberVector2({ x, y : x })

    return new NumberVector2({ x, y })
}

import NumberVector2 from './number-vector2'
import Vector2 from './vector2'
