import Matrix3x3 from './matrix3x3'

type Values = [
    number, number, number,
    number, number, number,
    number, number, number,
]

export default class ArrayMatrix3x3 extends Matrix3x3 {
    private values : Values

    public constructor({ values } : { values : Values }) {
        super()

        this.values = values
    }

    public get columns() {
        const { values } = this

        return new ArrayMatrix3x3Columns({ values })
    }
}

import ArrayMatrix3x3Columns from './array-matrix3x3-columns'
