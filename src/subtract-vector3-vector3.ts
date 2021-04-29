export default function subtractVector3Vector3(a : Vector3, b : Vector3) : Vector3 {
    return vec3(
        a.x - b.x,
        a.y - b.y,
        a.z - b.z,
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
