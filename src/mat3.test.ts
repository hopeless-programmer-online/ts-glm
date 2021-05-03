import { mat3, transposeMatrix3x3 } from './glm'

it('should accept nothing', () => {
    expect(mat3()).toMatchObject({
        0 : { x : 1, y : 0, z : 0 },
        1 : { x : 0, y : 1, z : 0 },
        2 : { x : 0, y : 0, z : 1 },
    })
})
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
it('should export transpose', () => {
    expect(mat3.transpose).toBe(transposeMatrix3x3)
})
