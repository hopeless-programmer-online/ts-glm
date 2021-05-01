export default function subtractNumberVector4(a : number, b : Vector4) : Vector4 {
    return subtract(
        vec4(a),
        b,
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import subtract from './subtract-vector4-vector4'
