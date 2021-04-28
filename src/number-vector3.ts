import Vector3 from './vector3'

export default class NumberVector3 extends Vector3 {
    private _x : number
    private _y : number
    private _z : number

    public constructor({ x = Vector3.default.x, y = Vector3.default.y, z = Vector3.default.z } : { x? : number, y? : number, z? : number } = {}) {
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
