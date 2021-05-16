export default abstract class Vector4 {
    public static default = { x : 0, y : 0, z : 0, w : 1 }

    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(y : number)
    public abstract get z() : number
    public abstract set z(z : number)
    public abstract get w() : number
    public abstract set w(w : number)

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
    public get [2]() {
        return this.z
    }
    public set [2](z : number) {
        this.z = z
    }
    public get [3]() {
        return this.w
    }
    public set [3](w : number) {
        this.w = w
    }

    public clone() {
        const { x, y, z, w } = this

        return vec4(x, y, z, w)
    }
    public toArray() : Vector4Array {
        const { x, y, z, w } = this

        return [ x, y, z, w ]
    }
    public toString() {
        const { x, y, z, w } = this

        return `Vector4 { x : ${x}, y : ${y}, z : ${z}, w : ${w} }`
    }
}

import Vector4Array from './vector4-array'
import vec4 from './vec4'

