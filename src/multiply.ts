import Vector2 from './vector2'
import Matrix2 from './matrix2'
import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyMatrix2Matrix2 from './multiply-matrix2-matrix2'
import multiplyMatrix2Vector2 from './multiply-matrix2-vector2'

export default function multiply(a : Matrix2, b : Matrix2) : Matrix2;
export default function multiply(a : Vector2, b : Vector2) : Vector2;
export default function multiply(a : Matrix2, b : Vector2) : Vector2;
export default function multiply(a : Matrix2 | Vector2, b : Matrix2 | Vector2) {
    if (a instanceof Matrix2) {
        if (b instanceof Matrix2) return multiplyMatrix2Matrix2(a, b)

        return multiplyMatrix2Vector2(a, b)
    }

    return multiplyVector2Vector2(a, b as Vector2)
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
