export default function dot(a : number, b : number) : number;
export default function dot(a : Vector2Components, b : Vector2Components) : number;
export default function dot(a : Vector3Components, b : Vector3Components) : number;

export default function dot(a : number | Vector2Components | Vector3Components, b : number | Vector2Components | Vector3Components) {
    if (typeof a === 'number') {
        return a * (b as number)
    }
    if ('z' in a || 'b' in a || '2' in a) return dotVector3Vector3(a, b as Vector3Components)

    return dotVector2Vector2(a, b as Vector2Components)
}

import Vector2Components from './vector2-components'
import Vector3Components from './vector3-components'
import dotVector2Vector2 from './dot-vector2-vector2'
import dotVector3Vector3 from './dot-vector3-vector3'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
