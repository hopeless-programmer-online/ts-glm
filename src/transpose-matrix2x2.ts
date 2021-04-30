export default function transposeMatrix2x2(m : Matrix2x2) : Matrix2x2 {
    return mat2(
        m[0].x, m[1].x,
        m[0].y, m[1].y,
    )
}

import Matrix2x2 from './matrix2x2'
import mat2 from './mat2'
