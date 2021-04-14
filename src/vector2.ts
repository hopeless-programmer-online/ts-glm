import XY from './xy'
import dot from './dot'
import { Vector2Components } from './vector2-components'

export default class Vector2 {
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

    public get r() {
        return this.x
    }
    public set r(r : number) {
        this.x = r
    }
    public get g() {
        return this.y
    }
    public set g(g : number) {
        this.y = g
    }

    public get [0]() {
        return this.x
    }
    public set [0](x : number) {
        this.x = x
    }
    public get [1]() {
        return this.y
    }
    public set [1](y : number) {
        this.y = y
    }

    public dot(other : XY) {
        return dot(this, other)
    }
    public toString() {
        const { x, y } = this

        return `Vector2 { x : ${x}, y : ${y} }`
    }
}
