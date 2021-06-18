export default function inverse(m : Matrix2x2Like) : Matrix2x2;
export default function inverse(m : Matrix3x3Like) : Matrix3x3;
export default function inverse(m : Matrix4x4Like) : Matrix4x4;

export default function inverse(m : Matrix4x4Like | Matrix3x3Like | Matrix2x2Like) {
    return deduce(m,
        m => inverseMatrix4x4(m),
        m => inverseMatrix3x3(m),
        m => inverseMatrix2x2(m),
        null,
        null,
        null,
        null,
    )
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import inverseMatrix2x2 from './inverse-matrix2x2'
import inverseMatrix3x3 from './inverse-matrix3x3'
import inverseMatrix4x4 from './inverse-matrix4x4'
import Matrix2x2Like from './matrix2x2-like'
import Matrix3x3Like from './matrix3x3-like'
import Matrix4x4Like from './matrix4x4-like'
import deduce from './deduce'

