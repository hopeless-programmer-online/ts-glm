export default abstract class Vector3Abstraction {
    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(x : number)
    public abstract get z() : number
    public abstract set z(z : number)

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
    public get b() {
        return this.z
    }
    public set b(b : number) {
        this.z = b
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
    public get [2]() {
        return this.z
    }
    public set [2](z : number) {
        this.z = z
    }

    public toString() {
        const { x, y, z } = this

        return `Vector3 { x : ${x}, y : ${y}, z : ${z} }`
    }
}
