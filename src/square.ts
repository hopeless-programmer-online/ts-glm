export default function square(v : Vector4Like) : number;
export default function square(v : Vector3Like) : number;
export default function square(v : Vector2Like) : number;
export default function square(v : number)  : number;

export default function square(v : Vector4Like | Vector3Like | Vector2Like | number) {
    return deduce(v,
        null,
        null,
        null,
        v => squareVector4(v),
        v => squareVector3(v),
        v => squareVector2(v),
        v => v**2,
    )
}

import Vector4Like from './vector4-like'
import Vector3Like from './vector3-like'
import Vector2Like from './vector2-like'
import squareVector2 from './square-vector2'
import squareVector3 from './square-vector3'
import squareVector4 from './square-vector4'
import deduce from './deduce'

