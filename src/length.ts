export default function length(v : Vector2Like) : number;
export default function length(v : Vector3Like) : number;
export default function length(v : Vector4Like) : number;

export default function length(v : Vector4Like | Vector3Like | Vector2Like) {
    return deduce(v,
        null,
        null,
        null,
        v => lengthVector4(v),
        v => lengthVector3(v),
        v => lengthVector2(v),
        null,
    )
}

import lengthVector4 from './length-vector4'
import lengthVector3 from './length-vector3'
import lengthVector2 from './length-vector2'
import Vector2Like from './vector2-like'
import Vector3Like from './vector3-like'
import Vector4Like from './vector4-like'
import deduce from './deduce'

