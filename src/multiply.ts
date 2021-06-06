export default function multiply(a : Matrix4x4Like, b : Matrix4x4Like) : Matrix4x4;
export default function multiply(a : Matrix4x4Like, b : Vector4Like) : Vector4;
export default function multiply(a : Matrix4x4Like, b : number) : Matrix4x4;

export default function multiply(a : Matrix3x3Like, b : Matrix3x3Like) : Matrix3x3;
export default function multiply(a : Matrix3x3Like, b : Vector3Like) : Vector3;
export default function multiply(a : Matrix3x3Like, b : number) : Matrix3x3;

export default function multiply(a : Matrix2x2Like, b : Matrix2x2Like) : Matrix2x2;
export default function multiply(a : Matrix2x2Like, b : Vector2Like) : Vector2;
export default function multiply(a : Matrix2x2Like, b : number) : Matrix2x2;

export default function multiply(a : Vector4Like, b : Vector4Like) : Vector4;
export default function multiply(a : Vector4Like, b : number) : Vector4;

export default function multiply(a : Vector3Like, b : Vector3Like) : Vector3;
export default function multiply(a : Vector3Like, b : number) : Vector3;

export default function multiply(a : Vector2Like, b : Vector2Like) : Vector2;
export default function multiply(a : Vector2Like, b : number) : Vector2;

export default function multiply(a : number, b : Matrix4x4Like) : Matrix4x4;
export default function multiply(a : number, b : Matrix3x3Like) : Matrix3x3;
export default function multiply(a : number, b : Matrix2x2Like) : Matrix2x2;
export default function multiply(a : number, b : Vector4Like) : Vector4;
export default function multiply(a : number, b : Vector3Like) : Vector3;
export default function multiply(a : number, b : Vector2Like) : Vector2;
export default function multiply(a : number, b : number) : number;

export default function multiply(
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
            /* Matrix4x4 */ b => multiplyMatrix4x4Matrix4x4(a, b),
            /* Matrix3x3 */ b => multiplyMatrix3x3Matrix3x3(mat3(a), b),
            /* Matrix2x2 */ b => multiplyMatrix2x2Matrix2x2(mat2(a), b),
            /* Vector4 */   b => multiplyMatrix4x4Vector4(a, b),
            /* Vector3 */   b => multiplyMatrix3x3Vector3(mat3(a), b),
            /* Vector2 */   b => multiplyMatrix2x2Vector2(mat2(a), b),
            /* number */    b => multiplyMatrix4x4Number(a, b),
        ),
        /* Matrix3x3 */
        a => deduce(b,
            /* Matrix4x4 */ b => multiplyMatrix3x3Matrix3x3(a, mat3(b)),
            /* Matrix3x3 */ b => multiplyMatrix3x3Matrix3x3(a, b),
            /* Matrix2x2 */ b => multiplyMatrix2x2Matrix2x2(mat2(a), b),
            /* Vector4 */   b => multiplyMatrix3x3Vector3(a, vec3(b.x, b.y, b.z)), // @todo: conversion via vec
            /* Vector3 */   b => multiplyMatrix3x3Vector3(a, b),
            /* Vector2 */   b => multiplyMatrix2x2Vector2(mat2(a), b),
            /* number */    b => multiplyMatrix3x3Number(a, b),
        ),
        /* Matrix2x2 */
        a => deduce(b,
            /* Matrix4x4 */ b => multiplyMatrix2x2Matrix2x2(a, mat2(b)),
            /* Matrix3x3 */ b => multiplyMatrix2x2Matrix2x2(a, mat2(b)),
            /* Matrix2x2 */ b => multiplyMatrix2x2Matrix2x2(a, b),
            /* Vector4 */   b => multiplyMatrix2x2Vector2(a, vec2(b.x, b.y)), // @todo: multiply conversion
            /* Vector3 */   b => multiplyMatrix2x2Vector2(a, vec2(b.x, b.y)), // @todo: multiply conversion
            /* Vector2 */   b => multiplyMatrix2x2Vector2(a, b),
            /* number */    b => multiplyMatrix2x2Number(a, b),
        ),
        /* Vector4 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => multiplyVector4Vector4(a, b),
            /* Vector3 */   b => multiplyVector3Vector3(vec3(a.x, a.y, a.z), b), // @todo: conversion via vec
            /* Vector2 */   b => multiplyVector2Vector2(vec2(a.x, a.y), b),      // @todo: conversion via vec
            /* number */    b => multiplyVector4Number(a, b),
        ),
        /* Vector3 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => multiplyVector3Vector3(a, vec3(b.x, b.y, b.z)), // @todo: conversion via vec
            /* Vector3 */   b => multiplyVector3Vector3(a, b),
            /* Vector2 */   b => multiplyVector2Vector2(vec2(a.x, a.y), b),      // @todo: conversion via vec
            /* number */    b => multiplyVector3Number(a, b),
        ),
        /* Vector2 */
        a => deduce(b,
            /* Matrix4x4 */ null,
            /* Matrix3x3 */ null,
            /* Matrix2x2 */ null,
            /* Vector4 */   b => multiplyVector2Vector2(a, vec2(b.x, b.y)), // @todo: multiply conversion
            /* Vector3 */   b => multiplyVector2Vector2(a, vec2(b.x, b.y)), // @todo: multiply conversion
            /* Vector2 */   b => multiplyVector2Vector2(a, b),
            /* number */    b => multiplyVector2Number(a, b),
        ),
        /* number */
        a => deduce(b,
            /* Matrix4x4 */ b => multiplyNumberMatrix4x4(a, b),
            /* Matrix3x3 */ b => multiplyNumberMatrix3x3(a, b),
            /* Matrix2x2 */ b => multiplyNumberMatrix2x2(a, b),
            /* Vector4 */   b => multiplyNumberVector4(a, b),
            /* Vector3 */   b => multiplyNumberVector3(a, b),
            /* Vector2 */   b => multiplyNumberVector2(a, b),
            /* number */    b => a * b,
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
import multiplyNumberVector2 from './multiply-number-vector2'
import multiplyNumberVector3 from './multiply-number-vector3'
import multiplyNumberVector4 from './multiply-number-vector4'
import multiplyVector2Number from './multiply-vector2-number'
import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyVector3Number from './multiply-vector3-number'
import multiplyVector3Vector3 from './multiply-vector3-vector3'
import multiplyVector4Number from './multiply-vector4-number'
import multiplyVector4Vector4 from './multiply-vector4-vector4'
import multiplyNumberMatrix4x4 from './multiply-number-matrix4x4'
import multiplyNumberMatrix3x3 from './multiply-number-matrix3x3'
import multiplyNumberMatrix2x2 from './multiply-number-matrix2x2'
import multiplyMatrix4x4Number from './multiply-matrix4x4-number'
import multiplyMatrix3x3Number from './multiply-matrix3x3-number'
import multiplyMatrix2x2Number from './multiply-matrix2x2-number'
import multiplyMatrix4x4Vector4 from './multiply-matrix4x4-vector4'
import multiplyMatrix3x3Vector3 from './multiply-matrix3x3-vector3'
import multiplyMatrix2x2Vector2 from './multiply-matrix2x2-vector2'
import multiplyMatrix4x4Matrix4x4 from './multiply-matrix4x4-matrix4x4'
import multiplyMatrix3x3Matrix3x3 from './multiply-matrix3x3-matrix3x3'
import multiplyMatrix2x2Matrix2x2 from './multiply-matrix2x2-matrix2x2'
import vec3 from './vec3'
import vec2 from './vec2'
import mat2 from './mat2'
import mat3 from './mat3'
import deduce from './deduce'
