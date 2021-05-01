export default function multiplyNumberVector4(a : number, b : Vector4) : Vector4 {
    return multiply(
        vec4(a),
        b,
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import multiply from './multiply-vector4-vector4'
