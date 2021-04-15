import Matrix2Column from "./matrix2-column"

type Matrix2Values4 = [ number, number, number, number ] // @todo: move to separate file

export default class Matrix2 {
    public static columnMajor(values : Matrix2Values4) {
        return new Matrix2({ values })
    }

    /**
     * Column-major order.
     */
    private values : Matrix2Values4

    public constructor({ values } : { values : Matrix2Values4 }) {
        this.values = [ ...values ]
    }

    public get [0]() {
        return new Matrix2Column({ values : this.values, offset : 0 })
    }
    public get [1]() {
        return new Matrix2Column({ values : this.values, offset : 2 })
    }
}
