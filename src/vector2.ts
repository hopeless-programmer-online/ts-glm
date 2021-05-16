export default abstract class Vector2 {
    public static default = { x : 0, y : 0 }

    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(y : number)

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

    public clone() {
        const { x, y } = this

        return vec2(x, y)
    }
    public toArray() : Array {
        const { x, y } = this

        return [ x, y ]
    }
    public toString() {
        const { x, y } = this

        return `Vector2 { x : ${x}, y : ${y} }`
    }
}

import Array from './vector2-array'
import vec2 from './vec2'

