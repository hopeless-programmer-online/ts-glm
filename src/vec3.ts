export default function vec3() : Vector3;
export default function vec3(x : number, y : number, z : number) : Vector3;

export default function vec3(x? : number, y? : number, z? : number) : Vector3 {
    if (x === undefined) return new NumberVector3

    return new NumberVector3({ x, y, z })
}

import NumberVector3 from './number-vector3'
import Vector3 from './vector3'
