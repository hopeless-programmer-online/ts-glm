export default function subtractVector4Vector4(a : Vector4, b : Vector4) : Vector4 {
    return vec4(
        a.x - b.x,
        a.y - b.y,
        a.z - b.z,
        a.w - b.w,
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
