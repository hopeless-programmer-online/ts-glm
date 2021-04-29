import Matrix2x2 from './matrix2x2'

type Values = [ number, number, number, number ]

export default class ArrayMatrix2x2 extends Matrix2x2 {
    private values : Values

    public constructor({ values } : { values : Values }) {
        super()

        this.values = values
    }

    public get [0]() {
        const { values } = this

        return new ArrayVector2({ values })
    }
    public get [1]() {
        const { values } = this

        return new ArrayVector2({ values, offset : 2 })
    }
}

import ArrayVector2 from './array-vector2'
