import { mat3 } from './glm'

it('should accept 9 numbers', () => {
    expect(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    )).toMatchObject({
        0 : { x : 1, y : 2, z : 3 },
        1 : { x : 4, y : 5, z : 6 },
        2 : { x : 7, y : 8, z : 9 },
    })
})
