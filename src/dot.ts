export default function dot(a : Vector2, b : Vector2) : number;
export default function dot(a : Vector3, b : Vector3) : number;
export default function dot(a : Vector4, b : Vector4) : number;

export default function dot(a : Vector4 | Vector3 | Vector2, b : Vector4 | Vector3 | Vector2) {
    if ('w' in a) return dotVector4Vector4(a, b as Vector4)
    if ('z' in a) return dotVector3Vector3(a, b as Vector3)

    return dotVector2Vector2(a, b as Vector2)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import dotVector2Vector2 from './dot-vector2-vector2'
import dotVector3Vector3 from './dot-vector3-vector3'
import dotVector4Vector4 from './dot-vector4-vector4'
