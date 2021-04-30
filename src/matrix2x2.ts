export default abstract class Matrix2x2 {
    public abstract get columns() : Matrix2x2Columns
    public abstract get rows() : Matrix2x2Rows

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }

    public toString() {
        const { 0 : _0, 1 : _1 } = this

        return (
            `Matrix2x2 {\n` +
            `    0 : { x : ${_0.x}, y : ${_0.y} }\n` +
            `    1 : { x : ${_1.x}, y : ${_1.y} }\n` +
            `}`
        )
    }
}

import Matrix2x2Columns from './matrix2x2-columns'
import Matrix2x2Rows from './matrix2x2-rows'
