export default function length(v : Vector2) : number;
export default function length(v : Vector3) : number;
export default function length(v : Vector4) : number;

export default function length(v : Vector4 | Vector3 | Vector2) {
    if ('w' in v) return lengthVector4(v)
    if ('z' in v) return lengthVector3(v)

    return lengthVector2(v)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import lengthVector4 from './length-vector4'
import lengthVector3 from './length-vector3'
import lengthVector2 from './length-vector2'
