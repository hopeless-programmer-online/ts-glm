export default abstract class Vector3 {
    public static default = { x : 0, y : 0, z : 0 }

    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(y : number)
    public abstract get z() : number
    public abstract set z(z : number)

    public toArray() {
        const { x, y, z } = this

        return [ x, y, z ]
    }
    public toString() {
        const { x, y, z } = this

        return `Vector3 { x : ${x}, y : ${y}, z : ${z} }`
    }
}
