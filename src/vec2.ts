import { Vector2 } from './glm'
import { Vector2Components } from './vector2components'

/**
 * Creates Vector2 with x and y equals to scalar.
 *
 * @param scalar - value to be set as x and y
 */
export default function vec2(scalar : number) : Vector2;
export default function vec2(xy : Vector2Components) : Vector2;
export default function vec2(x : number, y : number) : Vector2;

export default function vec2(xy : Vector2Components | number, y? : number) {
    return typeof xy === 'number'
        ? y === undefined
            ? Vector2.from(xy)
            : Vector2.from(xy, y)
        : Vector2.from(xy)
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 * @todo check if vec2->Vector2.from passing can be simplified
 */
