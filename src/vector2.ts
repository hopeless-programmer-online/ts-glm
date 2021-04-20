import Vector2Abstraction from './vector2-abstraction'
import Vector2Components from './vector2-components'

export default class Vector2 extends Vector2Abstraction {
    public static from(scalar : number) : Vector2
    public static from(xy : Vector2Components) : Vector2
    public static from(x : number, y : number) : Vector2
    public static from(xy : number | Vector2Components, y? : number) {
        if (typeof xy === 'number') {
            return y === undefined
                ? new Vector2({ x : xy, y : xy })
                : new Vector2({ x : xy, y })
        }

        const x =
            'x' in xy ? xy.x :
            'r' in xy ? xy.r :
            (xy[0] | 0)
        y =
            'y' in xy ? xy.y :
            'g' in xy ? xy.g :
            (xy[1] | 0)

        return new Vector2({ x, y })
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
