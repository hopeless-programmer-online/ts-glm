import { mat2, mat3, mat4, transposeMatrix2x2 } from './glm'

it('should accept nothing', () => {
    expect(mat2()).toMatchObject({
        0 : { x : 1, y : 0 },
        1 : { x : 0, y : 1 },
    })
})
it('should accept 4 numbers', () => {
    expect(mat2(
        1, 2,
        3, 4,
    )).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 3, y : 4 },
    })
})
it('should accept mat2', () => {
    expect(mat2(mat2(
        1, 2,
        3, 4,
    ))).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 3, y : 4 },
    })
})
it('should accept mat3', () => {
    expect(mat2(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ))).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 4, y : 5 },
    })
})
it('should accept mat4', () => {
    expect(mat2(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ))).toMatchObject({
        0 : { x : 1,  y : 2,  },
        1 : { x : 5,  y : 6,  },
    })
})
it('should export transpose', () => {
    expect(mat2.transpose).toBe(transposeMatrix2x2)
})
