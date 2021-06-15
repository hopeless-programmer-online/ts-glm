export default function negateVector4(a : Vector4) {
    return sub(vec(0), a)
}

import Vector4 from './vector4'
import vec from './vec4'
import sub from './subtract-vector4-vector4'
