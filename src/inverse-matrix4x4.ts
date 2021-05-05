export default function inverseMatrix4x4(m : Matrix4x4) {
    const a11 = m[0][0]
    const a12 = m[1][0]
    const a13 = m[2][0]
    const a14 = m[3][0]

    const a21 = m[0][1]
    const a22 = m[1][1]
    const a23 = m[2][1]
    const a24 = m[3][1]

    const a31 = m[0][2]
    const a32 = m[1][2]
    const a33 = m[2][2]
    const a34 = m[3][2]

    const a41 = m[0][3]
    const a42 = m[1][3]
    const a43 = m[2][3]
    const a44 = m[3][3]

    const det =
        + a11 * (a22*a33*a44 + a23*a34*a42 + a24*a32*a43 - a24*a33*a42 - a23*a32*a44 - a22*a34*a43)
        - a21 * (a12*a33*a44 + a13*a34*a42 + a14*a32*a43 - a14*a33*a42 - a13*a32*a44 - a12*a34*a43)
        + a31 * (a12*a23*a44 + a13*a24*a42 + a14*a22*a43 - a14*a23*a42 - a13*a22*a44 - a12*a24*a43)
        - a41 * (a12*a23*a34 + a13*a24*a32 + a14*a22*a33 - a14*a23*a32 - a13*a22*a34 - a12*a24*a33)

    const M11 = a22 * a33 * a44 + a23 * a34 * a42 + a24 * a32 * a43 - a24 * a33 * a42 - a23 * a32 * a44 - a22 * a34 * a43
    const M21 = a12 * a33 * a44 + a13 * a34 * a42 + a14 * a32 * a43 - a14 * a33 * a42 - a13 * a32 * a44 - a12 * a34 * a43
    const M31 = a12 * a23 * a44 + a13 * a24 * a42 + a14 * a22 * a43 - a14 * a23 * a42 - a13 * a22 * a44 - a12 * a24 * a43
    const M41 = a12 * a23 * a34 + a13 * a24 * a32 + a14 * a22 * a33 - a14 * a23 * a32 - a13 * a22 * a34 - a12 * a24 * a33
    const M12 = a21 * a33 * a44 + a23 * a34 * a41 + a24 * a31 * a43 - a24 * a33 * a41 - a23 * a31 * a44 - a21 * a34 * a43
    const M22 = a11 * a33 * a44 + a13 * a34 * a41 + a14 * a31 * a43 - a14 * a33 * a41 - a13 * a31 * a44 - a11 * a34 * a43
    const M32 = a11 * a23 * a44 + a13 * a24 * a41 + a14 * a21 * a43 - a14 * a23 * a41 - a13 * a21 * a44 - a11 * a24 * a43
    const M42 = a11 * a23 * a34 + a13 * a24 * a31 + a14 * a21 * a33 - a14 * a23 * a31 - a13 * a21 * a34 - a11 * a24 * a33
    const M13 = a21 * a32 * a44 + a22 * a34 * a41 + a24 * a31 * a42 - a24 * a32 * a41 - a22 * a31 * a44 - a21 * a34 * a42
    const M23 = a11 * a32 * a44 + a12 * a34 * a41 + a14 * a31 * a42 - a14 * a32 * a41 - a12 * a31 * a44 - a11 * a34 * a42
    const M33 = a11 * a22 * a44 + a12 * a24 * a41 + a14 * a21 * a42 - a14 * a22 * a41 - a12 * a21 * a44 - a11 * a24 * a42
    const M43 = a11 * a22 * a34 + a12 * a24 * a31 + a14 * a21 * a32 - a14 * a22 * a31 - a12 * a21 * a34 - a11 * a24 * a32
    const M14 = a21 * a32 * a43 + a22 * a33 * a41 + a23 * a31 * a42 - a23 * a32 * a41 - a22 * a31 * a43 - a21 * a33 * a42
    const M24 = a11 * a32 * a43 + a12 * a33 * a41 + a13 * a31 * a42 - a13 * a32 * a41 - a12 * a31 * a43 - a11 * a33 * a42
    const M34 = a11 * a22 * a43 + a12 * a23 * a41 + a13 * a21 * a42 - a13 * a22 * a41 - a12 * a21 * a43 - a11 * a23 * a42
    const M44 = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32

    const A11 = (-1)**(1 + 1) * M11
    const A21 = (-1)**(2 + 1) * M12
    const A31 = (-1)**(3 + 1) * M13
    const A41 = (-1)**(4 + 1) * M14
    const A12 = (-1)**(1 + 2) * M21
    const A22 = (-1)**(2 + 2) * M22
    const A32 = (-1)**(3 + 2) * M23
    const A42 = (-1)**(4 + 2) * M24
    const A13 = (-1)**(1 + 3) * M31
    const A23 = (-1)**(2 + 3) * M32
    const A33 = (-1)**(3 + 3) * M33
    const A43 = (-1)**(4 + 3) * M34
    const A14 = (-1)**(1 + 4) * M41
    const A24 = (-1)**(2 + 4) * M42
    const A34 = (-1)**(3 + 4) * M43
    const A44 = (-1)**(4 + 4) * M44

    return mul(1 / det, mat4(
        A11, A21, A31, A41,
        A12, A22, A32, A42,
        A13, A23, A33, A43,
        A14, A24, A34, A44,
    ))
}

import mat4 from './mat4'
import Matrix4x4 from './matrix4x4'
import mul from './multiply-number-matrix4x4'
