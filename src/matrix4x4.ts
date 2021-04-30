export default abstract class Matrix4x4 {
    public abstract get columns() : Matrix4x4Columns
    public abstract get rows() : Matrix4x4Rows

    public get [0]() {
        return this.columns[0]
    }
    public get [1]() {
        return this.columns[1]
    }
    public get [2]() {
        return this.columns[2]
    }
    public get [3]() {
        return this.columns[3]
    }

    public toString() {
        const { 0 : _0, 1 : _1, 2 : _2, 3 : _3 } = this

        return (
            `Matrix4x4 {\n` +
            `    0 : { x : ${_0.x}, y : ${_0.y}, z : ${_0.z}, w : ${_0.w} }\n` +
            `    1 : { x : ${_1.x}, y : ${_1.y}, z : ${_1.z}, w : ${_1.w} }\n` +
            `    2 : { x : ${_2.x}, y : ${_2.y}, z : ${_2.z}, w : ${_2.w} }\n` +
            `    3 : { x : ${_3.x}, y : ${_3.y}, z : ${_3.z}, w : ${_3.w} }\n` +
            `}`
        )
    }
}

import Matrix4x4Columns from './matrix4x4-columns'
import Matrix4x4Rows from './matrix4x4-rows'
