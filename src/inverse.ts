import Matrix2 from './matrix2'


export default function inverse(m : Matrix2) : Matrix2;

export default function inverse(m : Matrix2) {
    const a = m[0][0]
    const b = m[1][0]
    const c = m[0][1]
    const d = m[1][1]

    return new Matrix2({ values : [
        1 / (a - b * c / d),
        1 / (b - a * d / c),
        1 / (c - a * d / b),
        1 / (d - b * c / a),
    ] })
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
