import { mat2, matrix4x4FromMatrix2x2 as from } from './glm'

it('should accept mat2', () => {
    expect(from(mat2(
        1, 2,
        3, 4,
    ))).toMatchObject({
        0 : { x : 1, y : 2, z : 0, w : 0 },
        1 : { x : 3, y : 4, z : 0, w : 0 },
        2 : { x : 0, y : 0, z : 1, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
