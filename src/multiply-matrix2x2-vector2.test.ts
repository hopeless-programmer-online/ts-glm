import { mat2, multiplyMatrix2x2Vector2 as mul, vec2 } from './glm'

it('should multiply mat2 and vec2', () => {
    expect(mul(
        mat2(
            1, 2,
            3, 4,
        ),
        vec2(5, 6),
    )).toMatchObject({
        x : 1 * 5 + 3 * 6,
        y : 2 * 5 + 4 * 6,
    })
})
