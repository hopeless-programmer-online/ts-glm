export default class Vector2 {
    private _x : number
    private _y : number

    public constructor({ x = 0, y = 0 } : { x? : number, y? : number } = { x : 0, y : 0 }) {
        this._x = x
        this._y = y
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

    public toString() {
        const { x, y } = this

        return `Vector2 { x : ${x}, y : ${y} }`
    }
}
