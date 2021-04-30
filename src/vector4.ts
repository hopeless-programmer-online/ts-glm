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

    public toArray() {
        const { x, y, z, w } = this

        return [ x, y, z, w ]
    }
    public toString() {
        const { x, y, z, w } = this

        return `Vector4 { x : ${x}, y : ${y}, z : ${z}, w : ${w} }`
    }
}
