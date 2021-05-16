export default abstract class Matrix2x2 {
    public abstract get columns() : Columns
    public abstract get rows() : Rows

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }

    public clone() {
        return mat2(...this.toArray())
    }
    public toArray() : Array {
        return [
            ...this[0].toArray(),
            ...this[1].toArray(),
        ]
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

import Array from './matrix2x2-array'
import Columns from './matrix2x2-columns'
import Rows from './matrix2x2-rows'
import mat2 from './mat2'
