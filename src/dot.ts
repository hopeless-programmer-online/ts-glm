import { Vector2 } from './glm'

export default function dot(a : number, b : number) : number;
export default function dot(a : Vector2, b : Vector2) : number;

export default function dot(a : number | Vector2, b : number | Vector2) {
    if (typeof a === 'number') {
        if (typeof b !== 'number') throw new Error // @todo

        return a * b
    }

    if (typeof b === 'number') throw new Error // @todo

    return a.x * b.x + a.y * b.y
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
