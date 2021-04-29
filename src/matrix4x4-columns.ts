export default abstract class Matrix4x4Columns {
    public abstract get [0]() : Vector4
    public abstract get [1]() : Vector4
    public abstract get [2]() : Vector4
    public abstract get [3]() : Vector4
}

import Vector4 from './vector4'
