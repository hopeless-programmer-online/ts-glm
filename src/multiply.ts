import vec2 from './vec2'
import mat2 from './mat2'
import Vector2 from './vector2'
import Matrix2 from './matrix2'
import dot from './dot'

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

export function multiplyMatrix2Matrix2(a : Matrix2, b : Matrix2) {
    return mat2([
        // column #0
        a[0][0] * b[0][0] + a[1][0] * b[0][1],
        a[0][1] * b[0][0] + a[1][1] * b[0][1],
        // column #1
        a[0][0] * b[1][0] + a[1][0] * b[1][1],
        a[0][1] * b[1][0] + a[1][1] * b[1][1],
    ])
}
export function multiplyVector2Vector2(a : Vector2, b : Vector2) {
    return vec2(a.x * b.x, a.y * b.y)
}
export function multiplyMatrix2Vector2(a : Matrix2, b : Vector2) {
    return vec2(dot(a.rows[0], b), dot(a.rows[1], b))
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
