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
import Vector2Like from './vector2-like'
import Vector3Like from './vector3-like'
import Vector4Like from './vector4-like'
import Matrix2x2Like from './matrix2x2-like'
import Matrix3x3Like from './matrix3x3-like'
import Matrix4x4Like from './matrix4x4-like'
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
import vec3 from './vec3'
import vec2 from './vec2'
import deduce from './deduce'
