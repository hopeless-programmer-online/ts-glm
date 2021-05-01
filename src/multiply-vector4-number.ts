export default function multiplyVector4Number(a : Vector4, b : number) : Vector4 {
    return multiply(
        a,
        vec4(b),
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import multiply from './multiply-vector4-vector4'
