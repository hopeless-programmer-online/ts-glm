import deduceVector3 from './deduce-vector3'
import { deduceVector2, Vector2Components } from './glm'
import Vector3Abstraction from './vector3-abstraction'
import Vector3Components from './vector3-components'

export default class Vector3 extends Vector3Abstraction {
    public static from(scalar : number) : Vector3
    public static from(xyz : Vector3Components) : Vector3
    public static from(x : number, y : number) : Vector3
    public static from(xy : Vector2Components, z : number) : Vector3
    public static from(x : number, yz : Vector2Components) : Vector3
    public static from(x : number, y : number, z : number) : Vector3
    public static from(x : Vector3Components | Vector2Components | number, y? : Vector2Components | number, z? : number) {
        if (typeof x === 'number') {
            if (y === undefined) return new Vector3({ x, y : x, z : x })
            if (z === undefined) {
                if (typeof y === 'number') return new Vector3({ x, y })

                const yz = deduceVector2(y)

                return new Vector3({ x, y : yz.x, z : yz.y })
            }

            return new Vector3({ x, y : y as number, z })
        }
        if (typeof y === 'number') {
            const xy = deduceVector2(x)

            return new Vector3({ x : xy.x, y : xy.y, z : y })
        }

        return deduceVector3(x)
    }

    private _x : number
    private _y : number
    private _z : number

    public constructor({ x = 0, y = 0, z = 0 } : { x? : number, y? : number, z? : number } = {}) {
        super()

        this._x = x
        this._y = y
        this._z = z
    }

    public get x() {
        return this._x
    }
    public set x(x : number) {
        this._x = x
    }
    public get y() {
        return this._y
    }
    public set y(y : number) {
        this._y = y
    }
    public get z() {
        return this._z
    }
    public set z(z : number) {
        this._z = z
    }
}
