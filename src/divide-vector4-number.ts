export default function divideVector4Number(a : Vector4, b : number) : Vector4 {
    return divide(
        a,
        vec4(b),
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import divide from './divide-vector4-vector4'
