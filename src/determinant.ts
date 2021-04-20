import Matrix2 from './matrix2'

export default function determinant(m : Matrix2) : number;
export default function determinant(m : Matrix2) {
    /**
     * ┌     ┐
     * │ a b │
     * │ c d │
     * └     ┘
     */
    const a = m[0][0]
    const b = m[1][0]
    const c = m[0][1]
    const d = m[1][1]

    return a * d - b * c
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
