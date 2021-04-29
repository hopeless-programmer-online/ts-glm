import Vector2 from './vector2'

type Values = number[]
type Offset = number
type Stride = number
type Index = 0 | 1

export default class ArrayVector2 extends Vector2 {
    public static default = {
        ...Vector2.default,
        values : [ Vector2.default.x, Vector2.default.y ],
        offset : 0,
        stride : 1,
    }
    public static index = {
        x : 0 as Index,
        y : 1 as Index,
    }

    private readonly values : Values
    private readonly offset : Offset
    private readonly stride : Stride

    public constructor({ values, offset = ArrayVector2.default.offset, stride = ArrayVector2.default.stride } : { values? : Values, offset? : Offset, stride? : Stride } = {}) {
        if (!values) values = ArrayVector2.default.values.slice()

        super()

        this.values = values
        this.offset = offset
        this.stride = stride
    }

    public get x() {
        return this.getByIndex(ArrayVector2.index.x)
    }
    public set x(x : number) {
        this.setByIndex(ArrayVector2.index.x, x)
    }
    public get y() {
        return this.getByIndex(ArrayVector2.index.y)
    }
    public set y(y : number) {
        this.setByIndex(ArrayVector2.index.y, y)
    }

    private getByIndex(index : Index) {
        const { values, offset, stride } = this

        return values[offset + stride * index]
    }
    private setByIndex(index : Index, value : number) {
        const { values, offset, stride } = this

        values[offset + stride * index] = value
    }
}
