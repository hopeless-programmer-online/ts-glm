import Vector4 from './vector4'

export default class NumberVector4 extends Vector4 {
    private _x : number
    private _y : number
    private _z : number
    private _w : number

    public constructor({ x = Vector4.default.x, y = Vector4.default.y, z = Vector4.default.z, w = Vector4.default.w } : { x? : number, y? : number, z? : number, w? : number } = {}) {
        super()

        this._x = x
        this._y = y
        this._z = z
        this._w = w
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
    public get w() {
        return this._w
    }
    public set w(w : number) {
        this._w = w
    }
}
