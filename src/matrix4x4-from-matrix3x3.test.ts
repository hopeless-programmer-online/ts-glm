import { mat3, matrix4x4FromMatrix3x3 as from } from './glm'

it('should accept mat3', () => {
    expect(from(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ))).toMatchObject({
        0 : { x : 1, y : 2, z : 3, w : 0 },
        1 : { x : 4, y : 5, z : 6, w : 0 },
        2 : { x : 7, y : 8, z : 9, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
