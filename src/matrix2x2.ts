export default abstract class Matrix2x2 {
    public abstract get columns() : Matrix2x2Columns

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }
}

import Matrix2x2Columns from './matrix2x2-columns'
