export default function multiplyNumberVector3(a : number, b : Vector3) : Vector3 {
    return multiply(
        vec3(a),
        b,
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import multiply from './multiply-vector3-vector3'
