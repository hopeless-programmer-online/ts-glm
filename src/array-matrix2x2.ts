import Matrix2x2 from './matrix2x2'

type Values = [ number, number, number, number ]

export default class ArrayMatrix2x2 extends Matrix2x2 {
    public static default = {
        values : [
            1, 0,
            0, 1,
        ] as Values,
    }

    private values : Values

    public constructor({ values = undefined } : { values? : Values } = {}) {
        if (values === undefined) values = [ ...ArrayMatrix2x2.default.values ]

        super()

        this.values = values
    }

    public get columns() {
        const { values } = this

        return new ArrayMatrix2x2Columns({ values })
    }
    public get rows() {
        const { values } = this

        return new ArrayMatrix2x2Rows({ values })
    }
}

import ArrayMatrix2x2Columns from './array-matrix2x2-columns'
import ArrayMatrix2x2Rows from './array-matrix2x2-rows'

