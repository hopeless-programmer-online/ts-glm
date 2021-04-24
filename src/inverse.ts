export default function inverse(m : Matrix2) : Matrix2;

export default function inverse(m : Matrix2) {
    const a = adj(m)
    const d = 1 / det(m)

    return mul(d, a)
}

import adj from './adjugate'
import det from './determinant'
import mul from './multiply'
import Matrix2 from './matrix2'

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
