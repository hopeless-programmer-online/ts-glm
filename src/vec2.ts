type Vector2Source =
    | {}
    | ({ x : number } | { 0 : number })
    | ({ y : number } | { 1 : number })
    | ([ number ] | [ number, number ] | number[])

export default function vec2() : Vector2;
export default function vec2(source : Vector2Source) : Vector2;
export default function vec2(scalar : number) : Vector2;
export default function vec2(x : number, y : number) : Vector2;

export default function vec2(x? : Vector2Source | number, y? : number) : Vector2 {
    if (x === undefined) return new NumberVector2
    if (y !== undefined) return new NumberVector2({ x : x as number, y })
    if (typeof x === 'number') return new NumberVector2({ x, y : x })

    return ((v : Vector2Source) => {
        let x = Vector2.default.x

        if (`x` in v) {
            const vx = v.x

            if (typeof v.x === `number`) x = vx
        }
        else if (0 in v) {
            const v0 = v[0]

            if (typeof v0 === `number`) x = v0
        }

        let y = Vector2.default.y

        if (`y` in v) {
            const vy = v.y

            if (typeof v.y === `number`) y = vy
        }
        else if (1 in v) {
            const v1 = v[1]

            if (typeof v1 === `number`) y = v1
        }

        return new NumberVector2({ x, y })
    })(x)
}

import NumberVector2 from './number-vector2'
import Vector2 from './vector2'

vec2.default = Vector2.default
