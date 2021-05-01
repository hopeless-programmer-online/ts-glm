export default function subtractNumberMatrix2x2(a : number, b : Matrix2x2) : Matrix2x2 {
    return mat2(
        a - b[0][0], a - b[0][1],
        a - b[1][0], a - b[1][1],
    )
}

import Matrix2x2 from './matrix2x2'
import mat2 from './mat2'
