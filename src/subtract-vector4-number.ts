export default function subtractVector4Number(a : Vector4, b : number) : Vector4 {
    return subtract(
        a,
        vec4(b),
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import subtract from './subtract-vector4-vector4'
