export default function subtract(a : number, b : number) : number;
export default function subtract(a : number, b : Vector2) : Vector2;
export default function subtract(a : number, b : Vector2) : Vector2;
export default function subtract(a : number, b : Vector3) : Vector3;
export default function subtract(a : number, b : Matrix2x2) : Matrix2x2;
export default function subtract(a : number, b : Matrix3x3) : Matrix3x3;
export default function subtract(a : number, b : Matrix4x4) : Matrix4x4;

export default function subtract(a : Vector2, b : number) : Vector2;
export default function subtract(a : Vector2, b : Vector2) : Vector2;

export default function subtract(a : Vector3, b : number) : Vector3;
export default function subtract(a : Vector3, b : Vector3) : Vector3;

export default function subtract(a : Vector4, b : number) : Vector4;
export default function subtract(a : Vector4, b : Vector4) : Vector4;

export default function subtract(a : Matrix2x2, b : number) : Matrix2x2;

export default function subtract(a : Matrix3x3, b : number) : Matrix3x3;

export default function subtract(a : Matrix4x4, b : number) : Matrix4x4;

export default function subtract(a : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number, b : Matrix4x4 | Matrix3x3 | Matrix2x2 | Vector4 | Vector3 | Vector2 | number) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a - b
        if ('3' in b) {
            if (typeof b[3] === 'number') return subtractNumberVector4(a, b as Vector4)

            return subtractNumberMatrix4x4(a, b as Matrix4x4)
        }
        if ('2' in b) {
            if (typeof b[2] === 'number') return subtractNumberVector3(a, b as Vector3)

            return subtractNumberMatrix3x3(a, b as Matrix3x3)
        }
        if (typeof b[1] === 'number') return subtractNumberVector2(a, b as Vector2)

        return subtractNumberMatrix2x2(a, b as Matrix2x2)
    }
    if ('3' in a) {
        if (typeof a[3] === 'number') {
            if (typeof b === 'number') return subtractVector4Number(a as Vector4, b)
            if ('3' in b) return subtractVector4Vector4(a as Vector4, b as Vector4)
            if ('2' in b) return subtractVector3Vector3(a as Vector3, b as Vector3)

            return subtractVector2Vector2(a as Vector2, b as Vector2)
        }

        return subtractMatrix4x4Number(a as Matrix4x4, b as number)
    }
    if ('2' in a) {
        if (typeof a[2] === 'number') {
            if (typeof b === 'number') return subtractVector3Number(a as Vector3, b)
            if ('2' in b) return subtractVector3Vector3(a as Vector3, b as Vector3)

            return subtractVector2Vector2(a as Vector2, b as Vector2)
        }

        return subtractMatrix3x3Number(a as Matrix3x3, b as number)
    }
    if (typeof a[1] === 'number') {
        if (typeof b === 'number') return subtractVector2Number(a as Vector2, b)

        return subtractVector2Vector2(a as Vector2, b as Vector2)
    }

    return subtractMatrix2x2Number(a as Matrix2x2, b as number)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
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

