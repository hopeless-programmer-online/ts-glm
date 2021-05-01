export default function addNumberVector3(a : number, b : Vector3) : Vector3 {
    return add(
        vec3(a),
        b,
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import add from './add-vector3-vector3'
