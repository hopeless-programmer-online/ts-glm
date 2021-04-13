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

    public toString() {
        const { x, y } = this

        return `Vector2 { x : ${x}, y : ${y} }`
    }
}
