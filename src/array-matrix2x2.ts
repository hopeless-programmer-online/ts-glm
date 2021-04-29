import Matrix2x2 from './matrix2x2'

type Values = [ number, number, number, number ]

export default class ArrayMatrix2x2 extends Matrix2x2 {
    private values : Values

    public constructor({ values } : { values : Values }) {
        super()

        this.values = values
    }

    public get columns() {
        const { values } = this

        return new ArrayMatrix2x2Columns({ values })
    }
}

import ArrayMatrix2x2Columns from './array-matrix2x2-columns'

