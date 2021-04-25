export default class Matrix2 {
    public static columnMajor(values : Matrix2Values4) {
        return new Matrix2({ values })
    }
    public static rowMajor(values : Matrix2Values4) {
        const [ a, b, c, d ] = values

        return new Matrix2({ values : [
            a, c,
            b, d,
        ] })
    }

    /**
     * Column-major order.
     */
    private values : Matrix2Values4

    public constructor({ values } : { values : Matrix2Values4 }) {
        this.values = [ ...values ]
    }

    public get columns() {
        return new Matrix2Columns({ values : this.values })
    }
    public get rows() {
        return new Matrix2Rows({ values : this.values })
    }

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }
}

import Matrix2Columns from './matrix2-columns'
import Matrix2Rows from './matrix2-rows'
import Matrix2Values4 from './matrix2-values4'
