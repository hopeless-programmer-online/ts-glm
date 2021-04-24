export default class Matrix3 {
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
import Matrix3Values9 from './matrix3-values9'
