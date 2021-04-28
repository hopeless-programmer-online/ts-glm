import Vector2 from './vector2'

export default class NumberVector2 extends Vector2 {
    private _x : number
    private _y : number

    public constructor({ x, y } : { x : number, y : number }) {
        super()

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
}
