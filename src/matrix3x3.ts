export default abstract class Matrix3x3 {
    public abstract get [0]() : Vector3
    public abstract get [1]() : Vector3
    public abstract get [2]() : Vector3
}

import Vector3 from './vector3'
