import deduceVector3 from './deduce-vector3'
import Vector3Abstraction from './vector3-abstraction'
import Vector3Components from './vector3-components'

export default class Vector3 extends Vector3Abstraction {
    public static from(scalar : number) : Vector3
    public static from(xyz : Vector3Components) : Vector3
    public static from(x : number, y : number) : Vector3
    public static from(x : number, y : number, z : number) : Vector3
    public static from(xyz : Vector3Components | number, y? : number, z? : number) {
        if (typeof xyz === 'number') {
            if (y !== undefined) {
                if (z !== undefined) return new Vector3({ x : xyz, y, z })

                return new Vector3({ x : xyz, y })
            }

            return new Vector3({ x : xyz, y : xyz, z : xyz })
        }

        return deduceVector3(xyz)
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
