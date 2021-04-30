export default function mat2(m00 : number, m01 : number, m10 : number, m11 : number) : Matrix2x2 {
    return new ArrayMatrix2x2({ values : [
        m00, m01,
        m10, m11,
    ] })
}

import ArrayMatrix2x2 from './array-matrix2x2'
import Matrix2x2 from './matrix2x2'
import transposeMatrix2x2 from './transpose-matrix2x2'

mat2.transpose = transposeMatrix2x2
