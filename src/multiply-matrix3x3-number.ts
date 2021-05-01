export default function multiplyMatrix3x3Number(a : Matrix3x3, b : number) : Matrix3x3 {
    return mat3(
        a[0][0] * b, a[0][1] * b, a[0][2] * b,
        a[1][0] * b, a[1][1] * b, a[1][2] * b,
        a[2][0] * b, a[2][1] * b, a[2][2] * b,
    )
}

import Matrix3x3 from './matrix3x3'
import mat3 from './mat3'
