export default function vec3(x : number, y : number, z : number) : Vector3 {
    return new NumberVector3({ x, y, z })
}

import NumberVector3 from './number-vector3'
import Vector3 from './vector3'
