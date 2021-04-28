export default abstract class Vector2 {
    public static default = { x : 0, y : 0 }

    public abstract get x() : number
    public abstract set x(x : number)
    public abstract get y() : number
    public abstract set y(y : number)
}
