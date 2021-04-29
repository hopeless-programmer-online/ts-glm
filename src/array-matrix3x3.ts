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

    public get [0]() {
        const { values } = this

        return new ArrayVector3({ values })
    }
    public get [1]() {
        const { values } = this

        return new ArrayVector3({ values, offset : 3 })
    }
    public get [2]() {
        const { values } = this

        return new ArrayVector3({ values, offset : 6 })
    }
}

import ArrayVector3 from './array-vector3'
