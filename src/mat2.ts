export default function mat2(values : Matrix2Values4) : Matrix2;
export default function mat2(values : Matrix2Values4) {
    return new Matrix2({ values })
}

import Matrix2 from './matrix2'
import Matrix2Values4 from './matrix2-values4'
import rotate2 from './rotate2'

mat2.columnMajor = Matrix2.columnMajor
mat2.rowMajor = Matrix2.rowMajor
mat2.rotate = rotate2

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
