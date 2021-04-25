export default abstract class Vector2Abstraction {
    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(x : number)

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

    public abstract clone() : Vector2Abstraction

    public dot(other : Vector2Components) {
        return dot(this, other)
    }
    public toString() {
        const { x, y } = this

        return `Vector2 { x : ${x}, y : ${y} }`
    }
}

import dot from './dot-vector2-vector2'
import Vector2Components from './vector2-components'
