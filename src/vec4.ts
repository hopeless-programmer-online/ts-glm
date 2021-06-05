export default function vec4() : Vector4;
export default function vec4(scalar : number) : Vector4;
export default function vec4(x : number, y : number, z : number, w : number) : Vector4;

export default function vec4(x? : number, y? : number, z? : number, w? : number) : Vector4 {
    if (x === undefined) return new NumberVector4
    if (y === undefined) return new NumberVector4({ x, y : x, z : x, w : x })

    return new NumberVector4({ x, y, z, w })
}

import NumberVector4 from './number-vector4'
import Vector4 from './vector4'

vec4.default = Vector4.default
