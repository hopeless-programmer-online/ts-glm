export default function multiplyMatrix3Matrix3(a : Matrix3, b : Matrix3) {
    return Matrix3.rowMajor([
        a.rows[0].dot( b.columns[0] ),
        a.rows[0].dot( b.columns[1] ),
        a.rows[0].dot( b.columns[2] ),

        a.rows[1].dot( b.columns[0] ),
        a.rows[1].dot( b.columns[1] ),
        a.rows[1].dot( b.columns[2] ),

        a.rows[2].dot( b.columns[0] ),
        a.rows[2].dot( b.columns[1] ),
        a.rows[2].dot( b.columns[2] ),
    ])
}

import Matrix3 from './matrix3'
