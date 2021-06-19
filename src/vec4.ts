type Vector4Source =
    | {}
    | ({ x : number } | { 0 : number })
    | ({ y : number } | { 1 : number })
    | ({ z : number } | { 2 : number })
    | ({ w : number } | { 3 : number })
    | ([ number ] | [ number, number ] | number[])

export default function vec4() : Vector4;
export default function vec4(source : Vector4Source) : Vector4;
export default function vec4(scalar : number) : Vector4;
export default function vec4(x : number, y : number, z : number, w : number) : Vector4;

export default function vec4(x? : Vector4Source | number, y? : number, z? : number, w? : number) : Vector4 {
    if (x === undefined) return new NumberVector4
    if (y !== undefined) return new NumberVector4({ x : x as number, y, z, w })
    if (typeof x === 'number') return new NumberVector4({ x, y : x, z : x, w : x })

    return ((v : Vector4Source) => {
        let x = Vector4.default.x

        if (`x` in v) {
            const vx = v.x

            if (typeof vx === `number`) x = vx
        }
        else if (0 in v) {
            const v0 = v[0]

            if (typeof v0 === `number`) x = v0
        }

        let y = Vector4.default.y

        if (`y` in v) {
            const vy = v.y

            if (typeof vy === `number`) y = vy
        }
        else if (1 in v) {
            const v1 = v[1]

            if (typeof v1 === `number`) y = v1
        }

        let z = Vector4.default.z

        if (`z` in v) {
            const vz = v.z

            if (typeof vz === `number`) z = vz
        }
        else if (2 in v) {
            const v2 = v[2]

            if (typeof v2 === `number`) z = v2
        }

        let w = Vector4.default.w

        if (`w` in v) {
            const vw = v.w

            if (typeof vw === `number`) w = vw
        }
        else if (3 in v) {
            const v3 = v[3]

            if (typeof v3 === `number`) w = v3
        }

        return new NumberVector4({ x, y, z, w })
    })(x)
}

import NumberVector4 from './number-vector4'
import Vector4 from './vector4'

vec4.default = Vector4.default
