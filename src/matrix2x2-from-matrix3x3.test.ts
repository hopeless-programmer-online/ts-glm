import { mat3, matrix2x2FromMatrix3x3 as from } from './glm'

it('should accept mat4', () => {
    expect(from(mat3(
        1, 2,  3,
        4, 5,  6,
        7,  8, 9,
    ))).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 4, y : 5 },
    })
})
