export default function inverseMatrix2x2(m : Matrix2x2) {
    const d = m[0][0] * m[1][1] - m[0][1] * m[1][0]

    return mul(1 / d, mat2(
        +m[1][1], -m[0][1],
        -m[1][0], +m[0][0],
    ))
}

import mat2 from './mat2'
import Matrix2x2 from './matrix2x2'
import mul from './multiply-number-matrix2x2'
