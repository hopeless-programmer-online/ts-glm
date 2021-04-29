import Matrix4x4 from './matrix4x4'

type Values = [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
]

export default class ArrayMatrix4x4 extends Matrix4x4 {
    private values : Values

    public constructor({ values } : { values : Values }) {
        super()

        this.values = values
    }

    public get [0]() {
        const { values } = this

        return new ArrayVector4({ values })
    }
    public get [1]() {
        const { values } = this

        return new ArrayVector4({ values, offset : 4 })
    }
    public get [2]() {
        const { values } = this

        return new ArrayVector4({ values, offset : 8 })
    }
    public get [3]() {
        const { values } = this

        return new ArrayVector4({ values, offset : 12 })
    }
}

import ArrayVector4 from './array-vector4'
