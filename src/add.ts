import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector2Components from './vector2-components'
import Vector3Components from './vector3-components'
import deduceVector2 from './deduce-vector2'
import deduceVector3 from './deduce-vector3'

const { isArray } = Array

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
            const { x, y, z } = deduceVector3(b)

            return new Vector3({ x : a + x, y : a + y, z : a + z })
        }

        const { x, y } = deduceVector2(b)

        return new Vector2({ x : a + x, y : a + y })
    }
    if ('z' in a || 'b' in a || '2' in a) {
        const { x, y, z } = deduceVector3(a)

        if (typeof b === 'number') return new Vector3({ x : x + b, y : y + b, z : z + b })

        const vb = deduceVector3(b as Vector3Components)

        return new Vector3({ x : x + vb.x, y : y + vb.y, z : z + vb.z })
    }

    const { x, y } = deduceVector2(a)

    if (typeof b === 'number') return new Vector2({ x : x + b, y : y + b })

    const vb = deduceVector2(b)

    return new Vector2({ x : x + vb.x, y : y + vb.y })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
