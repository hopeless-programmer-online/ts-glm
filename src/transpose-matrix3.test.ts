import { mat3, transposeMatrix3 as transpose } from './glm'

it('should transpose mat3', () => {
    expect(transpose(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ))).toMatchObject({
        0 : { x : 1, y : 4, z : 7 },
        1 : { x : 2, y : 5, z : 8 },
        2 : { x : 3, y : 6, z : 9 },
    })
})
