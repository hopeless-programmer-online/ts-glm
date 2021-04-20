import mat2 from './mat2'
import Matrix2 from './matrix2'

/**
 * Compute adjugate matrix.
 *
 * @see https://en.wikipedia.org/wiki/Adjugate_matrix
 */
export default function adjugate(m : Matrix2) : Matrix2;
export default function adjugate(m : Matrix2) : Matrix2 {
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

    /**
     * ┌       ┐
     * │  d -b │
     * │ -c  a │
     * └       ┘
     */
     return mat2([ d, -c, -b, a ])
}

/**
 * @todo remove semicolons on declarations when syntax highlight will be fixed
 */
