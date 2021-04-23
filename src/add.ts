export default function add(a : number, b : number) : number;
export default function add(a : number, b : Vector2Components) : Vector2;
export default function add(a : Vector2Components, b : number) : Vector2;
export default function add(a : Vector2Components, b : Vector2Components) : Vector2;
export default function add(a : number, b : Vector3Components) : Vector3;
export default function add(a : Vector3Components, b : number) : Vector3;
export default function add(a : Vector3Components, b : Vector3Components) : Vector3;

export default function add(a : number | Vector2Components | Vector3Components, b : number | Vector2Components | Vector3Components) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a + b

        if ('z' in b || 'b' in b || '2' in b) {
            return addNumberVector3(a, b)
        }

        return addNumberVector2(a, b)
    }
    if ('z' in a || 'b' in a || '2' in a) {
        if (typeof b === 'number') return addVector3Number(a, b)

        return addVector3Vector3(a, b as Vector3Components)
    }

    if (typeof b === 'number') return addVector2Number(a, b)

    return addVector2Vector2(a, b)
}

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector2Components from './vector2-components'
import Vector3Components from './vector3-components'
import addNumberVector2 from './add-number-vector2'
import addVector2Number from './add-vector2-number'
import addVector2Vector2 from './add-vector2-vector2'
import addNumberVector3 from './add-number-vector3'
import addVector3Number from './add-vector3-number'
import addVector3Vector3 from './add-vector3-vector3'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
