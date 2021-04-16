import { mul, mat2 } from './glm'

it('should multiply mat2', () => {
    const r = mul(
        mat2([ 1, 3, 2, 4 ]),
        mat2([ 5, 7, 6, 8 ]),
    )

    expect(r[0][0]).toBe(1 * 5 + 2 * 7)
    expect(r[1][0]).toBe(1 * 6 + 2 * 8)
    expect(r[0][1]).toBe(3 * 5 + 4 * 7)
    expect(r[1][1]).toBe(3 * 6 + 4 * 8)
})
