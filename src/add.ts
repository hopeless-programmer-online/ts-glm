export default function add(a : number, b : number) : number;
export default function add(a : number, b : Vector2) : Vector2;
export default function add(a : number, b : Vector2) : Vector2;
export default function add(a : number, b : Vector3) : Vector3;
export default function add(a : number, b : Matrix2x2) : Matrix2x2;
export default function add(a : number, b : Matrix3x3) : Matrix3x3;
export default function add(a : number, b : Matrix4x4) : Matrix4x4;

export default function add(a : Vector2, b : number) : Vector2;
export default function add(a : Vector2, b : Vector2) : Vector2;

export default function add(a : Vector3, b : number) : Vector3;
export default function add(a : Vector3, b : Vector3) : Vector3;

export default function add(a : Vector4, b : number) : Vector4;
export default function add(a : Vector4, b : Vector4) : Vector4;

export default function add(a : Matrix2x2, b : number) : Matrix2x2;

export default function add(a : Matrix3x3, b : number) : Matrix3x3;

export default function add(a : Matrix4x4, b : number) : Matrix4x4;

export default function add(a : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number, b : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a + b
        if ('3' in b) {
            if (typeof b[3] === 'number') return addNumberVector4(a, b as Vector4)

            return addNumberMatrix4x4(a, b as Matrix4x4)
        }
        if ('2' in b) {
            if (typeof b[2] === 'number') return addNumberVector3(a, b as Vector3)

            return addNumberMatrix3x3(a, b as Matrix3x3)
        }
        if (typeof b[1] === 'number') return addNumberVector2(a, b as Vector2)

        return addNumberMatrix2x2(a, b as Matrix2x2)
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number') return addVector4Number(a as Vector4, b)
            if ('3' in b) return addVector4Vector4(a as Vector4, b as Vector4)
            if ('2' in b) return addVector3Vector3(a as Vector3, b as Vector3)

            return addVector2Vector2(a as Vector2, b as Vector2)
        }

        return addMatrix4x4Number(a as Matrix4x4, b as number)
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number') return addVector3Number(a as Vector3, b)
            if ('2' in b) return addVector3Vector3(a as Vector3, b as Vector3)

            return addVector2Vector2(a as Vector2, b as Vector2)
        }

        return addMatrix3x3Number(a as Matrix3x3, b as number)
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number') return addVector2Number(a as Vector2, b)

        return addVector2Vector2(a as Vector2, b as Vector2)
    }

    return addMatrix2x2Number(a as Matrix2x2, b as number)
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

