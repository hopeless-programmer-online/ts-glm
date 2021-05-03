import Matrix3x3 from './matrix3x3'

type Values = [
    number, number, number,
    number, number, number,
    number, number, number,
]

export default class ArrayMatrix3x3 extends Matrix3x3 {
    public static default = {
        values : [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ] as Values,
    }

    private values : Values

    public constructor({ values = undefined } : { values? : Values } = {}) {
        if (values === undefined) values = [ ...ArrayMatrix3x3.default.values ]

        super()

        this.values = values
    }

    public get columns() {
        const { values } = this

        return new ArrayMatrix3x3Columns({ values })
    }
    public get rows() {
        const { values } = this

        return new ArrayMatrix3x3Rows({ values })
    }
}

import ArrayMatrix3x3Columns from './array-matrix3x3-columns'
import ArrayMatrix3x3Rows from './array-matrix3x3-rows'
