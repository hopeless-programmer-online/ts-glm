export default function transposeMatrix4x4(m : Matrix4x4) : Matrix4x4 {
    return mat4(
        m[0].x, m[1].x, m[2].x, m[3].x,
        m[0].y, m[1].y, m[2].y, m[3].y,
        m[0].z, m[1].z, m[2].z, m[3].z,
        m[0].w, m[1].w, m[2].w, m[3].w,
    )
}

import Matrix4x4 from './matrix4x4'
import mat4 from './mat4'
