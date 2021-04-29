import { mat3, multiplyMatrix3x3Vector3 as mul, vec3 } from './glm'

it('should multiply mat3 and vec3', () => {
    expect(mul(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        vec3(10, 11, 12),
    )).toMatchObject({
        x : 1 * 10 + 4 * 11 + 7 * 12,
        y : 2 * 10 + 5 * 11 + 8 * 12,
        z : 3 * 10 + 6 * 11 + 9 * 12,
    })
})
