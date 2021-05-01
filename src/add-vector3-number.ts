export default function addVector3Number(a : Vector3, b : number) : Vector3 {
    return add(
        a,
        vec3(b),
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import add from './add-vector3-vector3'
