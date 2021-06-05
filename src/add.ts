type Vector2Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
    )
    | [ number, number ]
type Vector3Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
        & ({ z : number } | { 2 : number })
    )
    | [ number, number, number ]
type Vector4Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
        & ({ z : number } | { 2 : number })
        & ({ w : number } | { 3 : number })
    )
    | [ number, number, number, number ]
type Matrix2x2Like =
    | (
        & ({ x : Vector2Like } | { 0 : Vector2Like })
        & ({ y : Vector2Like } | { 1 : Vector2Like })
    )
    | [ Vector2Like, Vector2Like ]
type Matrix3x3Like =
    | (
        & ({ x : Vector3Like } | { 0 : Vector3Like })
        & ({ y : Vector3Like } | { 1 : Vector3Like })
        & ({ z : Vector3Like } | { 2 : Vector3Like })
    )
    | [ Vector3Like, Vector3Like, Vector3Like ]
type Matrix4x4Like =
    | (
        & ({ x : Vector4Like } | { 0 : Vector4Like })
        & ({ y : Vector4Like } | { 1 : Vector4Like })
        & ({ z : Vector4Like } | { 2 : Vector4Like })
        & ({ w : Vector4Like } | { 3 : Vector4Like })
    )
    | [ Vector4Like, Vector4Like, Vector4Like, Vector4Like ]

export default function add(a : Matrix4x4Like, b : number) : Matrix4x4;

export default function add(a : Matrix3x3Like, b : number) : Matrix3x3;

export default function add(a : Matrix2x2Like, b : number) : Matrix2x2;

export default function add(a : Vector4Like, b : Vector4Like) : Vector4;
export default function add(a : Vector4Like, b : number) : Vector4;

export default function add(a : Vector3Like, b : Vector3Like) : Vector3;
export default function add(a : Vector3Like, b : number) : Vector3;

export default function add(a : Vector2Like, b : Vector2Like) : Vector2;
export default function add(a : Vector2Like, b : number) : Vector2;

export default function add(a : number, b : Matrix4x4Like) : Matrix4x4;
export default function add(a : number, b : Matrix3x3Like) : Matrix3x3;
export default function add(a : number, b : Matrix2x2Like) : Matrix2x2;
export default function add(a : number, b : Vector4Like) : Vector4;
export default function add(a : number, b : Vector3Like) : Vector3;
export default function add(a : number, b : Vector2Like) : Vector2;
export default function add(a : number, b : number) : number;

export default function add(
    a :
    | Matrix4x4Like | Matrix3x3Like | Matrix2x2Like
    | Vector4Like | Vector3Like | Vector2Like
    | number,
    b :
    | Matrix4x4Like | Matrix3x3Like | Matrix2x2Like
    | Vector4Like | Vector3Like | Vector2Like
    | number
) {
    return deduce(a,
        /* Matrix4x4 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => addMatrix4x4Number(a, b),
        ),
        /* Matrix3x3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => addMatrix3x3Number(a, b),
        ),
        /* Matrix2x2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => addMatrix2x2Number(a, b),
        ),
        /* Vector4 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => addVector4Vector4(a, b),
            /* Vector3 */   b => addVector3Vector3(vec3(a.x, a.y, a.z), b), // @todo: add conversion via vec
            /* Vector2 */   b => addVector2Vector2(vec2(a.x, a.y), b),      // @todo: add conversion via vec
            /* number */    b => addVector4Number(a, b),
        ),
        /* Vector3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => addVector3Vector3(a, vec3(b.x, b.y, b.z)), // @todo: add conversion
            /* Vector3 */   b => addVector3Vector3(a, b),
            /* Vector2 */   b => addVector2Vector2(vec2(a.x, a.y), b),      // @todo: add conversion
            /* number */    b => addVector3Number(a, b),
        ),
        /* Vector2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => addVector2Vector2(a, vec2(b.x, b.y)), // @todo: add conversion
            /* Vector3 */   b => addVector2Vector2(a, vec2(b.x, b.y)), // @todo: add conversion
            /* Vector2 */   b => addVector2Vector2(a, b),
            /* number */    b => addVector2Number(a, b),
        ),
        /* number */
        a => deduce(b,
            /* Matrix4x4 */ b => addNumberMatrix4x4(a, b),
            /* Matrix3x3 */ b => addNumberMatrix3x3(a, b),
            /* Matrix2x2 */ b => addNumberMatrix2x2(a, b),
            /* Vector4 */   b => addNumberVector4(a, b),
            /* Vector3 */   b => addNumberVector3(a, b),
            /* Vector2 */   b => addNumberVector2(a, b),
            /* number */    b => a + b,
        ),
    )
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import addNumberVector2 from './add-number-vector2'
import addNumberVector3 from './add-number-vector3'
import addNumberVector4 from './add-number-vector4'
import addVector2Number from './add-vector2-number'
import addVector2Vector2 from './add-vector2-vector2'
import addVector3Number from './add-vector3-number'
import addVector3Vector3 from './add-vector3-vector3'
import addVector4Number from './add-vector4-number'
import addVector4Vector4 from './add-vector4-vector4'
import addNumberMatrix4x4 from './add-number-matrix4x4'
import addNumberMatrix3x3 from './add-number-matrix3x3'
import addNumberMatrix2x2 from './add-number-matrix2x2'
import addMatrix4x4Number from './add-matrix4x4-number'
import addMatrix3x3Number from './add-matrix3x3-number'
import addMatrix2x2Number from './add-matrix2x2-number'
import vec4 from './vec4'
import vec3 from './vec3'
import vec2 from './vec2'
import mat2 from './mat2'
import mat3 from './mat3'
import mat4 from './mat4'

function deduce<M4, M3, M2, V4, V3, V2, N>(
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
