export default abstract class Matrix3x3 {
    public abstract get columns() : Matrix3x3Columns
    public abstract get rows() : Matrix3x3Rows

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

import Matrix3x3Columns from './matrix3x3-columns'
import Matrix3x3Rows from './matrix3x3-rows'
