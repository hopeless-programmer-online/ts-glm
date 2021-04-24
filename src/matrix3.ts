export default class Matrix3 {
    /**
     * Column-major order.
     */
    private values : Matrix3Values9

    public constructor({ values } : { values : Matrix3Values9 }) {
        this.values = [ ...values ]
    }

    public get [0]() {
        return new Matrix3Vector({ values : this.values })
    }
    public get [1]() {
        return new Matrix3Vector({ values : this.values, offset : 3 })
    }
    public get [2]() {
        return new Matrix3Vector({ values : this.values, offset : 6 })
    }
}

import Matrix3Values9 from './matrix3-values9'
import Matrix3Vector from './matrix3-vector'
