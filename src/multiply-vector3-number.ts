export default function multiplyVector3Number(a : Vector3, b : number) : Vector3 {
    return multiply(
        a,
        vec3(b),
    )
}

import Vector3 from './vector3'
import vec3 from './vec3'
import multiply from './multiply-vector3-vector3'
