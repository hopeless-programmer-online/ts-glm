export default abstract class Vector3 {
    public static default = { x : 0, y : 0, z : 0 }

    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(y : number)
    public abstract get z() : number
    public abstract set z(z : number)

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

    public set(x : number, y : number, z : number) {
        this.x = x
        this.y = y
        this.z = z
    }
    public clone() {
        const { x, y, z } = this

        return vec3(x, y, z)
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
        const { x, y, z } = this

        return [ x, y, z ]
    }
    public toString() {
        const { x, y, z } = this

        return `Vector3 { x : ${x}, y : ${y}, z : ${z} }`
    }
}

import Like from './vector2-like'
import Array from './vector3-array'
import vec3 from './vec3'
import neg from './negate'
import add from './add'
import sub from './subtract'
import mul from './multiply'
import div from './divide'
import len from './length'
import sqr from './square'
