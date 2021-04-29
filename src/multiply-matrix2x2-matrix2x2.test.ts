import { mat2, multiplyMatrix2x2Matrix2x2 as mul } from './glm'

it('should multiply mat2 and vec2', () => {
    expect(mul(
        mat2(
            1, 2,
            3, 4,
        ),
        mat2(
            5, 6,
            7, 8,
        )
    )).toMatchObject({
        0 : {
            x : 1 * 5 + 3 * 6,
            y : 2 * 5 + 4 * 6,
        },
        1 : {
            x : 1 * 7 + 3 * 8,
            y : 2 * 7 + 4 * 8,
        },
    })
})
