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

    public set(x : number, y : number) {
        this.x = x
        this.y = y
    }
    public clone() {
        const { x, y } = this

        return vec2(x, y)
    }
    public add(other : Like | number) {
        // casting to number is a hack to overcome overloading ambiguity
        return add(this, other as number)
    }
    public subtract(other : Like | number) {
        // casting to number is a hack to overcome overloading ambiguity
        return sub(this, other as number)
    }
    public sub(other : Like | number) {
        return this.subtract(other)
    }
    public multiply(other : Like | number) {
        // casting to number is a hack to overcome overloading ambiguity
        return mul(this, other as number)
    }
    public mul(other : Like | number) {
        return this.multiply(other)
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

import Like from './vector2-like'
import Array from './vector2-array'
import vec2 from './vec2'
import add from './add'
import sub from './subtract'
import mul from './multiply'
