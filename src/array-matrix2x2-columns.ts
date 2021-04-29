import Matrix2x2Columns from './matrix2x2-columns'

type Index = 0 | 1

export default class ArrayMatrix2x2Columns extends Matrix2x2Columns {
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

    private getByIndex(index : Index) {
        const { values } = this

        return new ArrayVector2({ values, offset : index * 2 })
    }
}

import ArrayVector2 from './array-vector2'
