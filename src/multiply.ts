export default function multiply(a : number, b : Vector2) : Vector2;
export default function multiply(a : Vector2, b : number) : Vector2;
export default function multiply(a : Matrix2, b : Matrix2) : Matrix2;
export default function multiply(a : Vector2, b : Vector2) : Vector2;
export default function multiply(a : Matrix2, b : Vector2) : Vector2;

export default function multiply(a : Matrix2 | Vector2 | number, b : Matrix2 | Vector2 | number) {
    if (typeof a === 'number') return multiplyNumber2Vector2(a, b as Vector2)
    if (a instanceof Matrix2) {
        if (b instanceof Matrix2) return multiplyMatrix2Matrix2(a, b)

        return multiplyMatrix2Vector2(a, b as Vector2)
    }
    if (typeof b === 'number') return multiplyVector2Number(a, b)

    return multiplyVector2Vector2(a, b as Vector2)
}

import Vector2 from './vector2'
import Matrix2 from './matrix2'
import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyMatrix2Matrix2 from './multiply-matrix2-matrix2'
import multiplyMatrix2Vector2 from './multiply-matrix2-vector2'
import multiplyNumber2Vector2 from './multiply-number-vector2'
import multiplyVector2Number from './multiply-vector2-number'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
