export default function dot(a : Vector2Like, b : Vector2Like) : number;
export default function dot(a : Vector3Like, b : Vector3Like) : number;
export default function dot(a : Vector4Like, b : Vector4Like) : number;

export default function dot(a : Vector4Like | Vector3Like | Vector2Like, b : Vector4Like | Vector3Like | Vector2Like) {
    return deduce(a,
        null,
        null,
        null,
        a => deduce(b,
            null,
            null,
            null,
            b => dotVector4Vector4(a, b),
            b => dotVector3Vector3(vec3(a.x, a.y, a.z), b),
            b => dotVector2Vector2(vec2(a.x, a.y), b),
            null,
        ),
        a => deduce(b,
            null,
            null,
            null,
            b => dotVector3Vector3(a, vec3(b.x, b.y, b.z)),
            b => dotVector3Vector3(a, b),
            b => dotVector2Vector2(vec2(a.x, a.y), b),
            null,
        ),
        a => deduce(b,
            null,
            null,
            null,
            b => dotVector2Vector2(a, vec2(b.x, b.y)),
            b => dotVector2Vector2(a, vec2(b.x, b.y)),
            b => dotVector2Vector2(a, b),
            null,
        ),
        null,
    )
}

import Vector2Like from './vector2-like'
import Vector3Like from './vector3-like'
import Vector4Like from './vector4-like'
import deduce from './deduce'
import dotVector2Vector2 from './dot-vector2-vector2'
import dotVector3Vector3 from './dot-vector3-vector3'
import dotVector4Vector4 from './dot-vector4-vector4'
import vec2 from './vec2'
import vec3 from './vec3'
