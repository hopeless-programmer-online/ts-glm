import Matrix4x4 from './matrix4x4'

type Values = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
]

export default class ArrayMatrix4x4 extends Matrix4x4 {
    public static default = {
        values : [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ] as Values,
    }

    private values : Values

    public constructor({ values = undefined } : { values? : Values } = {}) {
        if (values === undefined) values = [ ...ArrayMatrix4x4.default.values ]

        super()

        this.values = values
    }

    public get columns() {
        const { values } = this

        return new ArrayMatrix4x4Columns({ values })
    }
    public get rows() {
        const { values } = this

        return new ArrayMatrix4x4Rows({ values })
    }
}

import ArrayMatrix4x4Columns from './array-matrix4x4-columns'
import ArrayMatrix4x4Rows from './array-matrix4x4-rows'
