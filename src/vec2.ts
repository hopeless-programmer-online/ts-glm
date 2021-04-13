import { Vector2 } from './glm'

/**
 * Creates Vector2 with x and y equals to scalar.
 *
 * @param scalar - value to be set as x and y
 */
export default function vec2(scalar : number) : Vector2;
export default function vec2(x : number, y : number) : Vector2;

export default function vec2(x : number, y? : number) {
    if (y === undefined) return new Vector2({ x, y : x })

    return new Vector2({ x, y })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
