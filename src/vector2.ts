import deduceVector2 from './deduce-vector2'
import Vector2Abstraction from './vector2-abstraction'
import Vector2Source from './vector2-source'

export default class Vector2 extends Vector2Abstraction {
    public static from(scalar : number) : Vector2
    public static from(xy : Vector2Source) : Vector2
    public static from(x : number, y : number) : Vector2
    public static from(xy : number | Vector2Source, y? : number) {
        if (typeof xy === 'number') {
            return y === undefined
                ? new Vector2({ x : xy, y : xy })
                : new Vector2({ x : xy, y })
        }

        return deduceVector2(xy)
    }

    private _x : number
    private _y : number

    public constructor({ x = 0, y = 0 } : { x? : number, y? : number } = {}) {
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

    public clone() {
        return new Vector2(this)
    }
}
