export default function dot(a : number, b : number) : number;
export default function dot(a : Vector2Components, b : Vector2Components) : number;

export default function dot(a : number | Vector2Components, b : number | Vector2Components) {
    if (typeof a === 'number') {
        return a * (b as number)
    }

    return dotVector2Vector2(a, b as Vector2Components)
}

import Vector2Components from './vector2-components'
import dotVector2Vector2 from './dot-vector2-vector2'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
