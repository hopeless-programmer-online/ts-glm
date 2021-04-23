export default class Matrix2Rows {
    private values : Matrix2Values4

    public constructor({ values } : { values : Matrix2Values4 }) {
        this.values = values
    }

    public get [0]() {
        return new Matrix2Vector({ values : this.values, stride : 2 })
    }
    public get [1]() {
        return new Matrix2Vector({ values : this.values, offset : 1, stride : 2 })
    }
}

import Matrix2Values4 from './matrix2-values4'
import Matrix2Vector from './matrix2-vector'
