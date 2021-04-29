import Matrix2x2Rows from './matrix2x2-rows'

type Index = 0 | 1

export default class ArrayMatrix2x2Rows extends Matrix2x2Rows {
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

        return new ArrayVector2({ values, offset : index, stride : 2 })
    }
}

import ArrayVector2 from './array-vector2'

