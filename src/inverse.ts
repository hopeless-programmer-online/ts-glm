export default function inverse(m : Matrix2x2) : Matrix2x2;
export default function inverse(m : Matrix3x3) : Matrix3x3;
export default function inverse(m : Matrix4x4) : Matrix4x4;

export default function inverse(m : Matrix4x4 | Matrix3x3 | Matrix2x2) {
    if ('3' in m) return inverseMatrix4x4(m)
    if ('2' in m) return inverseMatrix3x3(m)

    return inverseMatrix2x2(m)
}

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'
import inverseMatrix2x2 from './inverse-matrix2x2'
import inverseMatrix3x3 from './inverse-matrix3x3'
import inverseMatrix4x4 from './inverse-matrix4x4'
