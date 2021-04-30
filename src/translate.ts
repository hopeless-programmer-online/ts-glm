export default function translate(v : Vector3) : Matrix4x4 {
    return mat4.transpose(mat4(
        1, 0, 0, v.x,
        0, 1, 0, v.y,
        0, 0, 1, v.z,
        0, 0, 0, 1,
    ))
}

import Matrix4x4 from './matrix4x4'
import Vector3 from './vector3'
import mat4 from './mat4'
