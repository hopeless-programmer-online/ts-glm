import { mat4, matrix2x2FromMatrix4x4 as from } from './glm'

it('should accept mat4', () => {
    expect(from(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ))).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 5, y : 6 },
    })
})
