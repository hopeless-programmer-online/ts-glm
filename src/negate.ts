export default function negate(v : Vector4Like) : number;
export default function negate(v : Vector3Like) : number;
export default function negate(v : Vector2Like) : number;
export default function negate(v : number)  : number;

export default function negate(v : Vector4Like | Vector3Like | Vector2Like | number) {
    return deduce(v,
        null,
        null,
        null,
        v => negateVector4(v),
        v => negateVector3(v),
        v => negateVector2(v),
        n => -n,
    )
}

import Vector4Like from './vector4-like'
import Vector3Like from './vector3-like'
import Vector2Like from './vector2-like'
import negateVector2 from './negate-vector2'
import negateVector3 from './negate-vector3'
import negateVector4 from './negate-vector4'
import deduce from './deduce'

