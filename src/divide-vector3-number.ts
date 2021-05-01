export default function divideVector3Number(a : Vector3, b : number) : Vector3 {
    return divide(
        a,
        vec3(b),
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import divide from './divide-vector3-vector3'
