export default function divide(a : Matrix4x4Like, b : number) : Matrix4x4;

export default function divide(a : Matrix3x3Like, b : number) : Matrix3x3;

export default function divide(a : Matrix2x2Like, b : number) : Matrix2x2;

export default function divide(a : Vector4Like, b : Vector4Like) : Vector4;
export default function divide(a : Vector4Like, b : number) : Vector4;

export default function divide(a : Vector3Like, b : Vector3Like) : Vector3;
export default function divide(a : Vector3Like, b : number) : Vector3;

export default function divide(a : Vector2Like, b : Vector2Like) : Vector2;
export default function divide(a : Vector2Like, b : number) : Vector2;

export default function divide(a : number, b : Matrix4x4Like) : Matrix4x4;
export default function divide(a : number, b : Matrix3x3Like) : Matrix3x3;
export default function divide(a : number, b : Matrix2x2Like) : Matrix2x2;
export default function divide(a : number, b : Vector4Like) : Vector4;
export default function divide(a : number, b : Vector3Like) : Vector3;
export default function divide(a : number, b : Vector2Like) : Vector2;
export default function divide(a : number, b : number) : number;

export default function divide(
    a :
    | Matrix4x4Like | Matrix3x3Like | Matrix2x2Like
    | Vector4Like | Vector3Like | Vector2Like
    | number,
    b :
    | Matrix4x4Like | Matrix3x3Like | Matrix2x2Like
    | Vector4Like | Vector3Like | Vector2Like
    | number,
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
            /* number */    b => divideMatrix4x4Number(a, b),
        ),
        /* Matrix3x3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => divideMatrix3x3Number(a, b),
        ),
        /* Matrix2x2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => divideMatrix2x2Number(a, b),
        ),
        /* Vector4 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => divideVector4Vector4(a, b),
            /* Vector3 */   b => divideVector3Vector3(vec3(a.x, a.y, a.z), b), // @todo: divide conversion via vec
            /* Vector2 */   b => divideVector2Vector2(vec2(a.x, a.y), b),      // @todo: divide conversion via vec
            /* number */    b => divideVector4Number(a, b),
        ),
        /* Vector3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => divideVector3Vector3(a, vec3(b.x, b.y, b.z)), // @todo: divide conversion
            /* Vector3 */   b => divideVector3Vector3(a, b),
            /* Vector2 */   b => divideVector2Vector2(vec2(a.x, a.y), b),      // @todo: divide conversion
            /* number */    b => divideVector3Number(a, b),
        ),
        /* Vector2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => divideVector2Vector2(a, vec2(b.x, b.y)), // @todo: divide conversion
            /* Vector3 */   b => divideVector2Vector2(a, vec2(b.x, b.y)), // @todo: divide conversion
            /* Vector2 */   b => divideVector2Vector2(a, b),
            /* number */    b => divideVector2Number(a, b),
        ),
        /* number */
        a => deduce(b,
            /* Matrix4x4 */ b => divideNumberMatrix4x4(a, b),
            /* Matrix3x3 */ b => divideNumberMatrix3x3(a, b),
            /* Matrix2x2 */ b => divideNumberMatrix2x2(a, b),
            /* Vector4 */   b => divideNumberVector4(a, b),
            /* Vector3 */   b => divideNumberVector3(a, b),
            /* Vector2 */   b => divideNumberVector2(a, b),
            /* number */    b => a / b,
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
import divideNumberVector2 from './divide-number-vector2'
import divideNumberVector3 from './divide-number-vector3'
import divideNumberVector4 from './divide-number-vector4'
import divideVector2Number from './divide-vector2-number'
import divideVector2Vector2 from './divide-vector2-vector2'
import divideVector3Number from './divide-vector3-number'
import divideVector3Vector3 from './divide-vector3-vector3'
import divideVector4Number from './divide-vector4-number'
import divideVector4Vector4 from './divide-vector4-vector4'
import divideNumberMatrix4x4 from './divide-number-matrix4x4'
import divideNumberMatrix3x3 from './divide-number-matrix3x3'
import divideNumberMatrix2x2 from './divide-number-matrix2x2'
import divideMatrix4x4Number from './divide-matrix4x4-number'
import divideMatrix3x3Number from './divide-matrix3x3-number'
import divideMatrix2x2Number from './divide-matrix2x2-number'
import vec3 from './vec3'
import vec2 from './vec2'
import deduce from './deduce'
