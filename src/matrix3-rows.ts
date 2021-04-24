export default class Matrix3Rows {
    private values : Matrix3Values9

    public constructor({ values } : { values : Matrix3Values9 }) {
        this.values = values
    }

    public get [0]() {
        return new Matrix3Vector({ values : this.values, stride : 3 })
    }
    public get [1]() {
        return new Matrix3Vector({ values : this.values, offset : 1, stride : 3 })
    }
    public get [2]() {
        return new Matrix3Vector({ values : this.values, offset : 2, stride : 3 })
    }
}

import Matrix3Values9 from './matrix3-values9'
import Matrix3Vector from './matrix3-vector'
