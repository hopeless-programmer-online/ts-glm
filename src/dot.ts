import XY from './xy'

export default function dot(a : number, b : number) : number;
export default function dot(a : XY, b : XY) : number;

export default function dot(a : number | XY, b : number | XY) {
    if (typeof a === 'number') {
        return a * (b as number)
    }

    b = b as XY

    return a.x * b.x + a.y * b.y
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
