import Vector2 from './vector2'
import Vector2Components from './vector2-components'
import deduceVector2 from './deduce-vector2'

export default function add(a : number, b : number) : number;
export default function add(a : number, b : Vector2Components) : Vector2;
export default function add(a : Vector2Components, b : number) : Vector2;
export default function add(a : Vector2Components, b : Vector2Components) : Vector2;

export default function add(a : number | Vector2Components, b : number | Vector2Components) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a + b

        const { x, y } = deduceVector2(b)

        return new Vector2({ x : a + x, y : a + y })
    }

    const { x, y } = deduceVector2(a)

    if (typeof b === 'number') return new Vector2({ x : x + b, y : y + b })

    const vb = deduceVector2(b)

    return new Vector2({ x : x + vb.x, y : y + vb.y })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
