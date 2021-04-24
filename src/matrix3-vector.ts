import Vector3Abstraction from './vector3-abstraction'

export default class Matrix3Vector extends Vector3Abstraction {
    private values : number[]
    private offset : number
    private stride : number

    public constructor({ values, offset = 0, stride = 1 } : { values : number[], offset? : number, stride? : number }) {
        super()

        this.values = values
        this.offset = offset
        this.stride = stride
    }

    public get x() {
        const { values, offset, stride } = this

        return values[offset + stride * 0]
    }
    public set x(x : number) {
        const { values, offset, stride } = this

        values[offset + stride * 0] = x
    }
    public get y() {
        const { values, offset, stride } = this

        return values[offset + stride * 1]
    }
    public set y(y : number) {
        const { values, offset, stride } = this

        values[offset + stride * 1] = y
    }
    public get z() {
        const { values, offset, stride } = this

        return values[offset + stride * 2]
    }
    public set z(z : number) {
        const { values, offset, stride } = this

        values[offset + stride * 2] = z
    }
}
