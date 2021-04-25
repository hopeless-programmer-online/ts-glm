export default class Matrix3 {
    public static columnMajor(values : Matrix3Values9) {
        return new Matrix3({ values })
    }
    public static rowMajor(values : Matrix3Values9) {
        const [
            a, b, c,
            d, e, f,
            g, h, i,
        ] = values

        return new Matrix3({ values : [
            a, d, g,
            b, e, h,
            c, f, i,
        ] })
    }

    /**
     * Column-major order.
     */
    private values : Matrix3Values9

    public constructor({ values } : { values : Matrix3Values9 }) {
        this.values = [ ...values ]
    }

    get columns() {
        return new Matrix3Columns({ values : this.values })
    }
    get rows() {
        return new Matrix3Rows({ values : this.values })
    }

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }
    public get [2]() {
        return this.columns[2]
    }
}

import Matrix3Columns from './matrix3-columns'
import Matrix3Rows from './matrix3-rows'
import Matrix3Values9 from './matrix3-values9'
