export default function multiplyNumberMatrix2(a : number, b : Matrix2) {
    return mat2([
        a * b[0][0],
        a * b[0][1],
        a * b[1][0],
        a * b[1][1],
    ])
}

import mat2 from './mat2'
import Matrix2 from './matrix2'
