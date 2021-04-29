export default abstract class Matrix4x4 {
    public abstract get columns() : Matrix4x4Columns

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
}

import Matrix4x4Columns from './matrix4x4-columns'
