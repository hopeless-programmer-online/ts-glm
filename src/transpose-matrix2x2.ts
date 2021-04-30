export default function transposeMatrix2x2(m : Matrix2x2) : Matrix2x2 {
    return mat2(
        m[0][0], m[1][0],
        m[0][1], m[1][1],
    )
}

import Matrix2x2 from './matrix2x2'
import mat2 from './mat2'
