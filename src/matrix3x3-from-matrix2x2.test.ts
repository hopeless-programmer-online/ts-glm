import { mat2, matrix3x3FromMatrix2x2 as from } from './glm'

it('should accept mat2', () => {
    expect(from(mat2(
        1, 2,
        3, 4,
    ))).toMatchObject({
        0 : { x : 1, y : 2, z : 0 },
        1 : { x : 3, y : 4, z : 0 },
        2 : { x : 0, y : 0, z : 1 },
    })
})
