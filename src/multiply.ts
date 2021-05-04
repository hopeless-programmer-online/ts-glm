export default function multiply(a : number, b : number) : number;
export default function multiply(a : number, b : Vector2) : Vector2;
export default function multiply(a : number, b : Vector2) : Vector2;
export default function multiply(a : number, b : Vector3) : Vector3;
export default function multiply(a : number, b : Matrix2x2) : Matrix2x2;
export default function multiply(a : number, b : Matrix3x3) : Matrix3x3;
export default function multiply(a : number, b : Matrix4x4) : Matrix4x4;

export default function multiply(a : Vector2, b : number) : Vector2;
export default function multiply(a : Vector2, b : Vector2) : Vector2;

export default function multiply(a : Vector3, b : number) : Vector3;
export default function multiply(a : Vector3, b : Vector3) : Vector3;

export default function multiply(a : Vector4, b : number) : Vector4;
export default function multiply(a : Vector4, b : Vector4) : Vector4;

export default function multiply(a : Matrix2x2, b : number) : Matrix2x2;
export default function multiply(a : Matrix2x2, b : Vector2) : Vector2;

export default function multiply(a : Matrix3x3, b : number) : Matrix3x3;
export default function multiply(a : Matrix3x3, b : Vector3) : Vector3;

export default function multiply(a : Matrix4x4, b : number) : Matrix4x4;
export default function multiply(a : Matrix4x4, b : Vector4) : Vector4;

export default function multiply(a : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number, b : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a * b
        if ('3' in b) {
            if (typeof b[3] === 'number') return multiplyNumberVector4(a, b as Vector4)

            return multiplyNumberMatrix4x4(a, b as Matrix4x4)
        }
        if ('2' in b) {
            if (typeof b[2] === 'number') return multiplyNumberVector3(a, b as Vector3)

            return multiplyNumberMatrix3x3(a, b as Matrix3x3)
        }
        if (typeof b[1] === 'number') return multiplyNumberVector2(a, b as Vector2)

        return multiplyNumberMatrix2x2(a, b as Matrix2x2)
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number') return multiplyVector4Number(a as Vector4, b)
            if ('3' in b) return multiplyVector4Vector4(a as Vector4, b as Vector4)
            if ('2' in b) return multiplyVector3Vector3(a as Vector3, b as Vector3)

            return multiplyVector2Vector2(a as Vector2, b as Vector2)
        }
        if (typeof b === 'number') return multiplyMatrix4x4Number(a as Matrix4x4, b)

        return multiplyMatrix4x4Vector4(a as Matrix4x4, b as Vector4)
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number') return multiplyVector3Number(a as Vector3, b)
            if ('2' in b) return multiplyVector3Vector3(a as Vector3, b as Vector3)

            return multiplyVector2Vector2(a as Vector2, b as Vector2)
        }
        if (typeof b === 'number') return multiplyMatrix3x3Number(a as Matrix3x3, b as number)

        return multiplyMatrix3x3Vector3(a as Matrix3x3, b as Vector3)
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number') return multiplyVector2Number(a as Vector2, b)

        return multiplyVector2Vector2(a as Vector2, b as Vector2)
    }
    if (typeof b === 'number') return multiplyMatrix2x2Number(a as Matrix2x2, b as number)

    return multiplyMatrix2x2Vector2(a as Matrix2x2, b as Vector2)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
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

