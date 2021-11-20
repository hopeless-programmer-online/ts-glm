export default function negate(v : Vector4Like) : Vector4;
export default function negate(v : Vector3Like) : Vector3;
export default function negate(v : Vector2Like) : Vector2;
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

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Vector4Like from './vector4-like'
import Vector3Like from './vector3-like'
import Vector2Like from './vector2-like'
import negateVector2 from './negate-vector2'
import negateVector3 from './negate-vector3'
import negateVector4 from './negate-vector4'
import deduce from './deduce'
