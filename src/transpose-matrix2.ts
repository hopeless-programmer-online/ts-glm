export default function transposeMatrix2(m : Matrix2) {
    return mat2(
        m[0][0], m[1][0],
        m[0][1], m[1][1],
    )
}

import mat2 from './mat2'
import Matrix2 from './matrix2'
