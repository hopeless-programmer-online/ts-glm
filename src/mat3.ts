export default function mat3(
    m00 : number, m01 : number, m02 : number,
    m10 : number, m11 : number, m12 : number,
    m20 : number, m21 : number, m22 : number,
) : Matrix3x3 {
    return new ArrayMatrix3x3({ values : [
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22,
    ] })
}

import ArrayMatrix3x3 from './array-matrix3x3'
import Matrix3x3 from './matrix3x3'
