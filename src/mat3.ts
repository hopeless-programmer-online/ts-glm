export default function mat3(values : Matrix3Values9) : Matrix3;
export default function mat3(m00 : number, m01 : number, m02 : number, m10 : number, m11 : number, m12 : number, m20 : number, m21 : number, m22 : number) : Matrix3;

export default function mat3(m00 : Matrix3Values9 | number, m01? : number, m02? : number, m10? : number, m11? : number, m12? : number, m20? : number, m21? : number, m22? : number) {
    if (typeof m00 === 'number') return new Matrix3({ values : [
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22,
    ] })

    return new Matrix3({ values : m00 })
}

import Matrix3 from './matrix3'
import Matrix3Values9 from './matrix3-values9'

mat3.columnMajor = Matrix3.columnMajor
mat3.rowMajor = Matrix3.rowMajor

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
