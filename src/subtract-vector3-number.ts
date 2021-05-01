export default function subtractVector3Number(a : Vector3, b : number) : Vector3 {
    return subtract(
        a,
        vec3(b),
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import subtract from './subtract-vector3-vector3'
