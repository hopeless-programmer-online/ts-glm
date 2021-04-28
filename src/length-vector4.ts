export default function lengthVector4(v : Vector4) {
    return dotVector4Vector4(v, v)**(1/2)
}

import dotVector4Vector4 from './dot-vector4-vector4'
import Vector4 from './vector4'
