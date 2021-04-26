export default function multiplyMatrix3Number(a : Matrix3, b : number) {
    return mat3(
        a[0][0] * b, a[0][1] * b, a[0][2] * b,
        a[1][0] * b, a[1][1] * b, a[1][2] * b,
        a[2][0] * b, a[2][1] * b, a[2][2] * b,
    )
}

import mat3 from './mat3'
import Matrix3 from './matrix3'
