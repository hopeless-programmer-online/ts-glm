export default function addNumberVector4(a : number, b : Vector4) : Vector4 {
    return add(
        vec4(a),
        b,
    )
}

import Vector4 from './vector4'
import vec4 from './vec4'
import add from './add-vector4-vector4'
