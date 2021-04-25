import { mat3, multiplyMatrix3Matrix3 as mul } from './glm'

it('should multiply', () => {
    const m = mul(
        mat3([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ]),
        mat3([
            11, 12, 13,
            14, 15, 16,
            17, 18, 19,
        ]),
    )

    expect(m[0]).toMatchObject({
        x : 1 * 11 + 4 * 12 + 7 * 13,
        y : 2 * 11 + 5 * 12 + 8 * 13,
        z : 3 * 11 + 6 * 12 + 9 * 13,
    })
    expect(m[1]).toMatchObject({
        x : 1 * 14 + 4 * 15 + 7 * 16,
        y : 2 * 14 + 5 * 15 + 8 * 16,
        z : 3 * 14 + 6 * 15 + 9 * 16,
    })
    expect(m[2]).toMatchObject({
        x : 1 * 17 + 4 * 18 + 7 * 19,
        y : 2 * 17 + 5 * 18 + 8 * 19,
        z : 3 * 17 + 6 * 18 + 9 * 19,
    })
})
