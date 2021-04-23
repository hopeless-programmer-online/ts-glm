import Vector3Abstraction from './vector3-abstraction'

export default class Vector3 extends Vector3Abstraction {
    public static from(scalar : number) : Vector3
    public static from(xyz : Vector3Source) : Vector3
    public static from(x : number, y : number) : Vector3
    public static from(xy : Vector2Source, z : number) : Vector3
    public static from(x : number, yz : Vector2Source) : Vector3
    public static from(x : number, y : number, z : number) : Vector3
    public static from(x : Vector3Source | Vector2Source | number, y? : Vector2Source | number, z? : number) {
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

import deduceVector2 from './deduce-vector2'
import deduceVector3 from './deduce-vector3'
import Vector2Source from './vector2-source'
import Vector3Source from './vector3-source'
