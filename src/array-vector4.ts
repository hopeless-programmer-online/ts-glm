import Vector4 from './Vector4'

type Values = number[]
type Offset = number
type Stride = number
type Index = 0 | 1 | 2 | 3

export default class ArrayVector4 extends Vector4 {
    public static default = {
        ...Vector4.default,
        values : [ Vector4.default.x, Vector4.default.y, Vector4.default.z, Vector4.default.w ],
        offset : 0,
        stride : 1,
    }
    public static index = {
        x : 0 as Index,
        y : 1 as Index,
        z : 2 as Index,
        w : 3 as Index,
    }

    private readonly values : Values
    private readonly offset : Offset
    private readonly stride : Stride

    public constructor({ values, offset = ArrayVector4.default.offset, stride = ArrayVector4.default.stride } : { values? : Values, offset? : Offset, stride? : Stride } = {}) {
        if (!values) values = ArrayVector4.default.values.slice()

        super()

        this.values = values
        this.offset = offset
        this.stride = stride
    }

    public get x() {
        return this.getByIndex(ArrayVector4.index.x)
    }
    public set x(x : number) {
        this.setByIndex(ArrayVector4.index.x, x)
    }
    public get y() {
        return this.getByIndex(ArrayVector4.index.y)
    }
    public set y(y : number) {
        this.setByIndex(ArrayVector4.index.y, y)
    }
    public get z() {
        return this.getByIndex(ArrayVector4.index.z)
    }
    public set z(z : number) {
        this.setByIndex(ArrayVector4.index.z, z)
    }
    public get w() {
        return this.getByIndex(ArrayVector4.index.w)
    }
    public set w(w : number) {
        this.setByIndex(ArrayVector4.index.w, w)
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
