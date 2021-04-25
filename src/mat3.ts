export default function mat3(values : Matrix3Values9) : Matrix3;
export default function mat3(values : Matrix3Values9) {
    return new Matrix3({ values })
}

import Matrix3 from './matrix3'
import Matrix3Values9 from './matrix3-values9'

mat3.columnMajor = Matrix3.columnMajor
mat3.rowMajor = Matrix3.rowMajor

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
