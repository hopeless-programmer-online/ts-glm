export default function inverse(m : Matrix2) : Matrix2;

export default function inverse(m : Matrix2) {
    const a = adj(m)
    const d = 1 / det(m)

    return mat2([
        a[0][0] * d,
        a[0][1] * d,
        a[1][0] * d,
        a[1][1] * d,
    ])
}

import adj from './adjugate'
import det from './determinant'
import mat2 from './mat2'
import Matrix2 from './matrix2'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
