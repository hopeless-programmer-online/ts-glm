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

    public toString() {
        const { 0 : _0, 1 : _1, 2 : _2 } = this

        return (
            `Matrix3x3 {\n` +
            `    0 : { x : ${_0.x}, y : ${_0.y}, z : ${_0.z} }\n` +
            `    1 : { x : ${_1.x}, y : ${_1.y}, z : ${_1.z} }\n` +
            `    2 : { x : ${_2.x}, y : ${_2.y}, z : ${_2.z} }\n` +
            `}`
        )
    }
}

import Matrix3x3Columns from './matrix3x3-columns'
import Matrix3x3Rows from './matrix3x3-rows'
