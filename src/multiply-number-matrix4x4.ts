export default function multiplyNumberMatrix4x4(a : number, b : Matrix4x4) : Matrix4x4 {
    return mat4(
        a * b[0][0], a * b[0][1], a * b[0][2], a * b[0][3],
        a * b[1][0], a * b[1][1], a * b[1][2], a * b[1][3],
        a * b[2][0], a * b[2][1], a * b[2][2], a * b[2][3],
        a * b[3][0], a * b[3][1], a * b[3][2], a * b[3][3],
    )
}

import Matrix4x4 from './matrix4x4'
import mat4 from './mat4'
