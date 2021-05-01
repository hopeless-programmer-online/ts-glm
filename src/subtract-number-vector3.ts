export default function subtractNumberVector3(a : number, b : Vector3) : Vector3 {
    return subtract(
        vec3(a),
        b,
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import subtract from './subtract-vector3-vector3'
