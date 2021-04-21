import Vector3Abstraction from './vector3-abstraction'

export default class Vector3 extends Vector3Abstraction {
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
