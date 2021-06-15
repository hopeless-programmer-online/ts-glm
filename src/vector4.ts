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
    public get length() {
        return len(this)
    }
    public get len() {
        return len(this)
    }
    public get magnitude() {
        return len(this)
    }
    public get mag() {
        return len(this)
    }
    public get norm() {
        return len(this)
    }
    public get square() {
        return sqr(this)
    }
    public get sqr() {
        return this.square
    }
    public get negate() {
        return neg(this)
    }
    public get neg() {
        return this.negate
    }

    public set(x : number, y : number, z : number, w : number) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }
    public clone() {
        const { x, y, z, w } = this

        return vec4(x, y, z, w)
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
    public divide(other : Like | number) {
        // casting to number is a hack to overcome overloading ambiguity
        return div(this, other as number)
    }
    public div(other : Like | number) {
        return this.divide(other)
    }
    public toArray() : Array {
        const { x, y, z, w } = this

        return [ x, y, z, w ]
    }
    public toString() {
        const { x, y, z, w } = this

        return `Vector4 { x : ${x}, y : ${y}, z : ${z}, w : ${w} }`
    }
}

import Like from './vector2-like'
import Array from './vector4-array'
import vec4 from './vec4'
import neg from './negate'
import add from './add'
import sub from './subtract'
import mul from './multiply'
import div from './divide'
import len from './length'
import sqr from './square'
