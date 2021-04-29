import { mat4, multiplyMatrix4x4Vector4 as mul, vec4 } from './glm'

it('should multiply mat4 and vec4', () => {
    expect(mul(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        vec4(17, 18, 19, 20),
    )).toMatchObject({
        x : 17 * 1 + 18 * 5 + 19 * 9  + 20 * 13,
        y : 17 * 2 + 18 * 6 + 19 * 10 + 20 * 14,
        z : 17 * 3 + 18 * 7 + 19 * 11 + 20 * 15,
        w : 17 * 4 + 18 * 8 + 19 * 12 + 20 * 16,
    })
})
