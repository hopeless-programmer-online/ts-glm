import mat2 from './mat2'
import Matrix2 from './matrix2'

export default function multiplyMatrix2Matrix2(a : Matrix2, b : Matrix2) {
    return mat2([
        // column #0
        a.rows[0].dot(b.columns[0]),
        a.rows[1].dot(b.columns[0]),
        // column #1
        a.rows[0].dot(b.columns[1]),
        a.rows[1].dot(b.columns[1]),
    ])
}
