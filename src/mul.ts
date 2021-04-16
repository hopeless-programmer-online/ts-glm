import Matrix2 from './matrix2'

export default function mul(a : Matrix2, b : Matrix2) : Matrix2;
export default function mul(a : Matrix2, b : Matrix2) {
    return new Matrix2({ values : [
        // column #0
        a[0][0] * b[0][0] + a[1][0] * b[0][1],
        a[0][1] * b[0][0] + a[1][1] * b[0][1],
        // column #1
        a[0][0] * b[1][0] + a[1][0] * b[1][1],
        a[0][1] * b[1][0] + a[1][1] * b[1][1],
    ] })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
