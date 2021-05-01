export default function addVector4Number(a : Vector4, b : number) : Vector4 {
    return add(
        a,
        vec4(b),
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import add from './add-vector4-vector4'
