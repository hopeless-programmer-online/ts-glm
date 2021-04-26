export default function multiplyNumberMatrix3(a : number, b : Matrix3) {
    return mat3(
        a * b[0][0], a * b[0][1], a * b[0][2],
        a * b[1][0], a * b[1][1], a * b[1][2],
        a * b[2][0], a * b[2][1], a * b[2][2],
    )
}

import mat3 from './mat3'
import Matrix3 from './matrix3'
