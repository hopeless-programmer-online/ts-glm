export default function multiplyMatrix2x2Matrix2x2(a : Matrix2x2, b : Matrix2x2) : Matrix2x2 {
    return mat2(
        dot( a.rows[0], b.columns[0] ), dot( a.rows[1], b.columns[0] ),
        dot( a.rows[0], b.columns[1] ), dot( a.rows[1], b.columns[1] ),
    )
}

import Matrix2x2 from './matrix2x2'
import dot from './dot-vector2-vector2'
import mat2 from './mat2'

