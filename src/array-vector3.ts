import Vector3 from './Vector3'

type Values = number[]
type Offset = number
type Stride = number
type Index = 0 | 1 | 2

export default class ArrayVector3 extends Vector3 {
    public static default = {
        ...Vector3.default,
        values : [ Vector3.default.x, Vector3.default.y, Vector3.default.z ],
        offset : 0,
        stride : 1,
    }
    public static index = {
        x : 0 as Index,
        y : 1 as Index,
        z : 2 as Index,
    }

    private readonly values : Values
    private readonly offset : Offset
    private readonly stride : Stride

    public constructor({ values, offset = ArrayVector3.default.offset, stride = ArrayVector3.default.stride } : { values? : Values, offset? : Offset, stride? : Stride } = {}) {
        if (!values) values = ArrayVector3.default.values.slice()

        super()

        this.values = values
        this.offset = offset
        this.stride = stride
    }

    public get x() {
        return this.getByIndex(ArrayVector3.index.x)
    }
    public set x(x : number) {
        this.setByIndex(ArrayVector3.index.x, x)
    }
    public get y() {
        return this.getByIndex(ArrayVector3.index.y)
    }
    public set y(y : number) {
        this.setByIndex(ArrayVector3.index.y, y)
    }
    public get z() {
        return this.getByIndex(ArrayVector3.index.z)
    }
    public set z(z : number) {
        this.setByIndex(ArrayVector3.index.z, z)
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
