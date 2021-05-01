export default function divideNumberVector4(a : number, b : Vector4) : Vector4 {
    return divide(
        vec4(a),
        b,
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import divide from './divide-vector4-vector4'
