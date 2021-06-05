export default function subtract(a : Matrix4x4Like, b : number) : Matrix4x4;

export default function subtract(a : Matrix3x3Like, b : number) : Matrix3x3;

export default function subtract(a : Matrix2x2Like, b : number) : Matrix2x2;

export default function subtract(a : Vector4Like, b : Vector4Like) : Vector4;
export default function subtract(a : Vector4Like, b : number) : Vector4;

export default function subtract(a : Vector3Like, b : Vector3Like) : Vector3;
export default function subtract(a : Vector3Like, b : number) : Vector3;

export default function subtract(a : Vector2Like, b : Vector2Like) : Vector2;
export default function subtract(a : Vector2Like, b : number) : Vector2;

export default function subtract(a : number, b : Matrix4x4Like) : Matrix4x4;
export default function subtract(a : number, b : Matrix3x3Like) : Matrix3x3;
export default function subtract(a : number, b : Matrix2x2Like) : Matrix2x2;
export default function subtract(a : number, b : Vector4Like) : Vector4;
export default function subtract(a : number, b : Vector3Like) : Vector3;
export default function subtract(a : number, b : Vector2Like) : Vector2;
export default function subtract(a : number, b : number) : number;

export default function subtract(
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
            /* number */    b => subtractMatrix4x4Number(a, b),
        ),
        /* Matrix3x3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => subtractMatrix3x3Number(a, b),
        ),
        /* Matrix2x2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   null,
            /* Vector3 */   null,
            /* Vector2 */   null,
            /* number */    b => subtractMatrix2x2Number(a, b),
        ),
        /* Vector4 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => subtractVector4Vector4(a, b),
            /* Vector3 */   b => subtractVector3Vector3(vec3(a.x, a.y, a.z), b), // @todo: subtract conversion via vec
            /* Vector2 */   b => subtractVector2Vector2(vec2(a.x, a.y), b),      // @todo: subtract conversion via vec
            /* number */    b => subtractVector4Number(a, b),
        ),
        /* Vector3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => subtractVector3Vector3(a, vec3(b.x, b.y, b.z)), // @todo: subtract conversion
            /* Vector3 */   b => subtractVector3Vector3(a, b),
            /* Vector2 */   b => subtractVector2Vector2(vec2(a.x, a.y), b),      // @todo: subtract conversion
            /* number */    b => subtractVector3Number(a, b),
        ),
        /* Vector2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => subtractVector2Vector2(a, vec2(b.x, b.y)), // @todo: subtract conversion
            /* Vector3 */   b => subtractVector2Vector2(a, vec2(b.x, b.y)), // @todo: subtract conversion
            /* Vector2 */   b => subtractVector2Vector2(a, b),
            /* number */    b => subtractVector2Number(a, b),
        ),
        /* number */
        a => deduce(b,
            /* Matrix4x4 */ b => subtractNumberMatrix4x4(a, b),
            /* Matrix3x3 */ b => subtractNumberMatrix3x3(a, b),
            /* Matrix2x2 */ b => subtractNumberMatrix2x2(a, b),
            /* Vector4 */   b => subtractNumberVector4(a, b),
            /* Vector3 */   b => subtractNumberVector3(a, b),
            /* Vector2 */   b => subtractNumberVector2(a, b),
            /* number */    b => a - b,
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
import subtractNumberVector2 from './subtract-number-vector2'
import subtractNumberVector3 from './subtract-number-vector3'
import subtractNumberVector4 from './subtract-number-vector4'
import subtractVector2Number from './subtract-vector2-number'
import subtractVector2Vector2 from './subtract-vector2-vector2'
import subtractVector3Number from './subtract-vector3-number'
import subtractVector3Vector3 from './subtract-vector3-vector3'
import subtractVector4Number from './subtract-vector4-number'
import subtractVector4Vector4 from './subtract-vector4-vector4'
import subtractNumberMatrix4x4 from './subtract-number-matrix4x4'
import subtractNumberMatrix3x3 from './subtract-number-matrix3x3'
import subtractNumberMatrix2x2 from './subtract-number-matrix2x2'
import subtractMatrix4x4Number from './subtract-matrix4x4-number'
import subtractMatrix3x3Number from './subtract-matrix3x3-number'
import subtractMatrix2x2Number from './subtract-matrix2x2-number'
import vec3 from './vec3'
import vec2 from './vec2'
import deduce from './deduce'
