export default function deduce<M4, M3, M2, V4, V3, V2, N>(
    s :
    | Matrix4x4Like | Matrix3x3Like | Matrix2x2Like
    | Vector4Like | Vector3Like | Vector2Like
    | number,
    matrix4x4Handler : null | ((m : Matrix4x4) => M4),
    matrix3x3Handler : null | ((m : Matrix3x3) => M3),
    matrix2x2Handler : null | ((m : Matrix2x2) => M2),
    vector4Handler   : null | ((v : Vector4) => V4),
    vector3Handler   : null | ((v : Vector3) => V3),
    vector2Handler   : null | ((v : Vector2) => V2),
    numberHandler    : null | ((n : number) => N),
) : M4 | M3 | M2 | V4 | V3 | V2 | N {
    if (typeof s === 'number') return numberHandler(s)

    const x = ('x' in s && s.x) || (0 in s && s[0])

    if (typeof x === 'number') {
        const y = ('y' in s && s.y) || (1 in s && s[1])
        const z = ('z' in s && s.z) || (2 in s && s[2])

        if (typeof z !== 'number') return vector2Handler(vec2(x, y))

        const w = ('w' in s && s.w) || (3 in s && s[3])

        if (typeof w === 'number') return vector4Handler(vec4(x, y, z, w))

        return vector3Handler(vec3(x, y, z))
    }

    const xx = ('x' in x && x.x) || (0 in x && x[0])
    const xy = ('y' in x && x.y) || (1 in x && x[1])

    const y = ('y' in s && s.y) || (1 in s && s[1])

    const yx = ('x' in y && y.x) || (0 in y && y[0])
    const yy = ('y' in y && y.y) || (1 in y && y[1])

    const z = ('z' in s && s.z) || (2 in s && s[2])

    if (z === false) {
        return matrix2x2Handler(mat2(
            xx, xy,
            yx, yy,
        ))
    }

    const xz = ('z' in x && x.z) || (2 in x && x[2])
    const yz = ('z' in y && y.z) || (2 in y && y[2])

    const zx = ('x' in z && z.x) || (0 in z && z[0])
    const zy = ('y' in z && z.y) || (1 in z && z[1])
    const zz = ('z' in z && z.z) || (2 in z && z[2])

    const w = ('w' in s && s.w) || (3 in s && s[3])

    if (w === false) {
        return matrix3x3Handler(mat3(
            xx, xy, xz,
            yx, yy, yz,
            zx, zy, zz,
        ))
    }

    const yw = ('w' in y && y.w) || (3 in y && y[3])
    const xw = ('w' in x && x.w) || (3 in x && x[3])
    const zw = ('w' in z && z.w) || (3 in z && z[3])

    const wx = ('x' in w && w.x) || (0 in w && w[0])
    const wy = ('y' in w && w.y) || (1 in w && w[1])
    const wz = ('z' in w && w.z) || (2 in w && w[2])
    const ww = ('w' in w && w.w) || (3 in w && w[3])

    return matrix4x4Handler(mat4(
        xx, xy, xz, xw,
        yx, yy, yz, yw,
        zx, zy, zz, zw,
        wx, wy, wz, ww,
    ))
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import Vector2Like from './vector2-like'
import Vector3Like from './vector3-like'
import Vector4Like from './vector4-like'
import Matrix2x2Like from './matrix2x2-like'
import Matrix3x3Like from './matrix3x3-like'
import Matrix4x4Like from './matrix4x4-like'
import vec4 from './vec4'
import vec3 from './vec3'
import vec2 from './vec2'
import mat2 from './mat2'
import mat3 from './mat3'
import mat4 from './mat4'
