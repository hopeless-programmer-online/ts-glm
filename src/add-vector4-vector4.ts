export default function addVector4Vector4(a : Vector4, b : Vector4) : Vector4 {
    return new NumberVector4({
        x : a.x + b.x,
        y : a.y + b.y,
        z : a.z + b.z,
        w : a.w + b.w,
    })
}

import Vector4 from './vector4'
import NumberVector4 from './number-vector4'
