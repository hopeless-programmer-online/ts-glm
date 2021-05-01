export default function multiplyNumberMatrix3x3(a : number, b : Matrix3x3) : Matrix3x3 {
    return mat3(
        a * b[0][0], a * b[0][1], a * b[0][2],
        a * b[1][0], a * b[1][1], a * b[1][2],
        a * b[2][0], a * b[2][1], a * b[2][2],
    )
}

import Matrix3x3 from './matrix3x3'
import mat3 from './mat3'
