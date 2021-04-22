import Vector3 from './vector3'
import Vector2Components from './vector2-components'
import Vector3Components from './vector3-components'

/**
 * Creates Vector2 with x and y equals to scalar.
 *
 * @param scalar - value to be set as x and y
 */
export default function vec3() : Vector3;
export default function vec3(scalar : number) : Vector3;
export default function vec3(xyz : Vector3Components) : Vector3;
export default function vec3(x : number, y : number) : Vector3;
export default function vec3(xy : Vector2Components, z : number) : Vector3;
export default function vec3(x : number, yz : Vector2Components) : Vector3;
export default function vec3(x : number, y : number, z : number) : Vector3;

export default function vec3(x? : Vector3Components | Vector2Components | number, y? : Vector2Components | number, z? : number) {
    if (z === undefined) {
        if (y === undefined) {
            if (x === undefined) return new Vector3

            return Vector3.from(x)
        }
        if (typeof y === 'number') return Vector3.from(x, y)

        return Vector3.from(x as number, y)
    }

    return Vector3.from(x as number, y as number, z)
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 * @todo check if vec3->Vector3.from passing can be simplified
 */
