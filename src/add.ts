import Vector2 from './vector2'

export default function add(a : number, b : number) : number;
export default function add(a : number, b : Vector2) : Vector2;
export default function add(a : Vector2, b : number) : Vector2;
export default function add(a : Vector2, b : Vector2) : Vector2;

export default function add(a : number | Vector2, b : number | Vector2) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a + b

        return new Vector2({ x : a + b.x, y : a + b.y })
    }

    if (typeof b === 'number') return new Vector2({ x : a.x + b, y : a.y + b })

    return new Vector2({ x : a.x + b.x, y : a.y + b.y })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
