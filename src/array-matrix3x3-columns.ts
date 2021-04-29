import Matrix3x3Columns from './matrix3x3-columns'

type Index = 0 | 1 | 2

export default class ArrayMatrix3x3Columns extends Matrix3x3Columns {
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

    private getByIndex(index : Index) {
        const { values } = this

        return new ArrayVector3({ values, offset : index * 3 })
    }
}

import ArrayVector3 from './array-vector3'
