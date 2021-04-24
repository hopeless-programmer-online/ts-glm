export default function multiplyMatrix2Number(a : Matrix2, b : number) {
    return mat2([
        a[0][0] * b,
        a[0][1] * b,
        a[1][0] * b,
        a[1][1] * b,
    ])
}

import mat2 from './mat2'
import Matrix2 from './matrix2'
