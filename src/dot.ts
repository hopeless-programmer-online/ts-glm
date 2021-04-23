export default function dot(a : number, b : number) : number;
export default function dot(a : Vector2Components, b : Vector2Components) : number;

export default function dot(a : number | Vector2Components, b : number | Vector2Components) {
    if (typeof a === 'number') {
        return a * (b as number)
    }

    const va = deduceVector2(a)
    const vb = deduceVector2(b as Vector2Components)

    return va.x * vb.x + va.y * vb.y
}

import deduceVector2 from './deduce-vector2'
import Vector2Components from './vector2-components'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
