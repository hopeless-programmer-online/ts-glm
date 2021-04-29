import Matrix4x4Rows from './matrix4x4-rows'

type Index = 0 | 1 | 2 | 3

export default class ArrayMatrix4x4Rows extends Matrix4x4Rows {
    private values : number[]

    public constructor({ values } : { values : number[] }) {
        super()

        this.values = values
    }

    public get [0]() {
        return this.getByIndex(0)
    }
    public get [1]() {
        return this.getByIndex(1)
    }
    public get [2]() {
        return this.getByIndex(2)
    }
    public get [3]() {
        return this.getByIndex(3)
    }

    private getByIndex(index : Index) {
        const { values } = this

        return new ArrayVector4({ values, offset : index, stride : 4 })
    }
}

import ArrayVector4 from './array-vector4'

