export default function addVector3Vector3(a : Vector3, b : Vector3) : Vector3 {
    return new NumberVector3({
        x : a.x + b.x,
        y : a.y + b.y,
        z : a.z + b.z,
    })
}

import Vector3 from './vector3'
import NumberVector3 from './number-vector3'
