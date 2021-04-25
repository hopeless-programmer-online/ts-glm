/**
 * Creates Vector2 with x and y equals to scalar.
 *
 * @param scalar - value to be set as x and y
 */
export default function vec2() : Vector2;
export default function vec2(scalar : number) : Vector2;
export default function vec2(xy : Vector2Components) : Vector2;
export default function vec2(x : number, y : number) : Vector2;

export default function vec2(xy? : Vector2Components | number, y? : number) {
    return (
        xy === undefined       ? new Vector2         :
        typeof xy !== 'number' ? Vector2.from(xy)    :
        y === undefined        ? Vector2.from(xy)    :
                                 Vector2.from(xy, y)
    )
}

import Vector2 from './vector2'
import Vector2Components from './vector2-source'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 * @todo check if vec2->Vector2.from passing can be simplified
 */
