export default function divide(a : number, b : number) : number;
export default function divide(a : number, b : Vector2) : Vector2;
export default function divide(a : number, b : Vector2) : Vector2;
export default function divide(a : number, b : Vector3) : Vector3;
export default function divide(a : number, b : Matrix2x2) : Matrix2x2;
export default function divide(a : number, b : Matrix3x3) : Matrix3x3;
export default function divide(a : number, b : Matrix4x4) : Matrix4x4;

export default function divide(a : Vector2, b : number) : Vector2;
export default function divide(a : Vector2, b : Vector2) : Vector2;

export default function divide(a : Vector3, b : number) : Vector3;
export default function divide(a : Vector3, b : Vector3) : Vector3;

export default function divide(a : Vector4, b : number) : Vector4;
export default function divide(a : Vector4, b : Vector4) : Vector4;

export default function divide(a : Matrix2x2, b : number) : Matrix2x2;

export default function divide(a : Matrix3x3, b : number) : Matrix3x3;

export default function divide(a : Matrix4x4, b : number) : Matrix4x4;

export default function divide(a : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number, b : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a / b
        if ('3' in b) {
            if (typeof b[3] === 'number') return divideNumberVector4(a, b as Vector4)

            return divideNumberMatrix4x4(a, b as Matrix4x4)
        }
        if ('2' in b) {
            if (typeof b[2] === 'number') return divideNumberVector3(a, b as Vector3)

            return divideNumberMatrix3x3(a, b as Matrix3x3)
        }
        if (typeof b[1] === 'number') return divideNumberVector2(a, b as Vector2)

        return divideNumberMatrix2x2(a, b as Matrix2x2)
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number') return divideVector4Number(a as Vector4, b)
            if ('3' in b) return divideVector4Vector4(a as Vector4, b as Vector4)
            if ('2' in b) return divideVector3Vector3(a as Vector3, b as Vector3)

            return divideVector2Vector2(a as Vector2, b as Vector2)
        }

        return divideMatrix4x4Number(a as Matrix4x4, b as number)
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number') return divideVector3Number(a as Vector3, b)
            if ('2' in b) return divideVector3Vector3(a as Vector3, b as Vector3)

            return divideVector2Vector2(a as Vector2, b as Vector2)
        }

        return divideMatrix3x3Number(a as Matrix3x3, b as number)
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number') return divideVector2Number(a as Vector2, b)

        return divideVector2Vector2(a as Vector2, b as Vector2)
    }

    return divideMatrix2x2Number(a as Matrix2x2, b as number)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
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

