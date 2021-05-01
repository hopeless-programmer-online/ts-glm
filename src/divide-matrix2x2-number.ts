export default function divideMatrix2x2Number(a : Matrix2x2, b : number) : Matrix2x2 {
    return mat2(
        a[0][0] / b, a[0][1] / b,
        a[1][0] / b, a[1][1] / b,
    )
}

import Matrix2x2 from './matrix2x2'
import mat2 from './mat2'
