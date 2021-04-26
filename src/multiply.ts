type Left = Matrix3 | Matrix2 | Vector2 | number
type Right = Matrix3 | Matrix2 | Vector3 | Vector2 | number

export default function multiply(a : number, b : number) : number;
export default function multiply(a : number, b : Vector2) : Vector2;
export default function multiply(a : number, b : Matrix2) : Matrix2;
export default function multiply(a : number, b : Matrix3) : Matrix3;
export default function multiply(a : Vector2, b : number) : Vector2;
export default function multiply(a : Vector2, b : Vector2) : Vector2;
export default function multiply(a : Matrix2, b : number) : Matrix2;
export default function multiply(a : Matrix2, b : Vector2) : Vector2;
export default function multiply(a : Matrix2, b : Matrix2) : Matrix2;
export default function multiply(a : Matrix3, b : number) : Vector3;
export default function multiply(a : Matrix3, b : Vector3) : Vector3;

export default function multiply(a : Left, b : Right) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a * b
        if (b instanceof Vector2) return multiplyNumber2Vector2(a, b)
        if (b instanceof Matrix3) return multiplyNumberMatrix3(a, b)

        return multiplyNumberMatrix2(a, b as Matrix2)
    }
    if (a instanceof Vector2) {
        if (typeof b === 'number') return multiplyVector2Number(a, b)

        return multiplyVector2Vector2(a, b as Vector2)
    }
    if (a instanceof Matrix2) {
        if (typeof b === 'number') return multiplyMatrix2Number(a, b)
        if (b instanceof Vector2) return multiplyMatrix2Vector2(a, b)

        return multiplyMatrix2Matrix2(a, b as Matrix2)
    }
    if (typeof b === 'number') return multiplyMatrix3Number(a, b)

    return multiplyMatrix3Vector3(a, b as Vector3)
}

import Vector2 from './vector2'
import Matrix2 from './matrix2'
import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyMatrix2Matrix2 from './multiply-matrix2-matrix2'
import multiplyMatrix2Vector2 from './multiply-matrix2-vector2'
import multiplyNumber2Vector2 from './multiply-number-vector2'
import multiplyVector2Number from './multiply-vector2-number'
import multiplyNumberMatrix2 from './multiply-number-matrix2'
import multiplyMatrix2Number from './multiply-matrix2-number'
import multiplyMatrix3Vector3 from './multiply-matrix3-vector3'
import Vector3 from './vector3'
import Matrix3 from './matrix3'
import multiplyNumberMatrix3 from './multiply-number-matrix3'
import multiplyMatrix3Number from './multiply-matrix3-number'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
