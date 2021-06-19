type Vector3Source =
    | {}
    | ({ x : number } | { 0 : number })
    | ({ y : number } | { 1 : number })
    | ({ z : number } | { 2 : number })
    | ([ number ] | [ number, number ] | number[])

export default function vec3() : Vector3;
export default function vec3(source : Vector3Source) : Vector3;
export default function vec3(scalar : number) : Vector3;
export default function vec3(x : number, y : number, z : number) : Vector3;

export default function vec3(x? : Vector3Source | number, y? : number, z? : number) : Vector3 {
    if (x === undefined) return new NumberVector3
    if (y !== undefined) return new NumberVector3({ x : x as number, y, z })
    if (typeof x === 'number') return new NumberVector3({ x, y : x, z : x })

    return ((v : Vector3Source) => {
        let x = Vector3.default.x

        if (`x` in v) {
            const vx = v.x

            if (typeof vx === `number`) x = vx
        }
        else if (0 in v) {
            const v0 = v[0]

            if (typeof v0 === `number`) x = v0
        }

        let y = Vector3.default.y

        if (`y` in v) {
            const vy = v.y

            if (typeof vy === `number`) y = vy
        }
        else if (1 in v) {
            const v1 = v[1]

            if (typeof v1 === `number`) y = v1
        }

        let z = Vector3.default.z

        if (`z` in v) {
            const vz = v.z

            if (typeof vz === `number`) z = vz
        }
        else if (2 in v) {
            const v2 = v[2]

            if (typeof v2 === `number`) z = v2
        }


        return new NumberVector3({ x, y, z })
    })(x)
}

import NumberVector3 from './number-vector3'
import Vector3 from './vector3'

vec3.default = Vector3.default
