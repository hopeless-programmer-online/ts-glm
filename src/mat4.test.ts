import { mat2, mat3, mat4, transposeMatrix4x4 } from './glm'

it('should accept nothing', () => {
    expect(mat4()).toMatchObject({
        0 : { x : 1, y : 0, z : 0, w : 0 },
        1 : { x : 0, y : 1, z : 0, w : 0 },
        2 : { x : 0, y : 0, z : 1, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
it('should accept 9 numbers', () => {
    expect(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    )).toMatchObject({
        0 : { x : 1,  y : 2,  z : 3,  w : 4 },
        1 : { x : 5,  y : 6,  z : 7,  w : 8 },
        2 : { x : 9,  y : 10, z : 11, w : 12 },
        3 : { x : 13, y : 14, z : 15, w : 16 },
    })
})
it('should accept mat2', () => {
    expect(mat4(mat2(
        1, 2,
        3, 4,
    ))).toMatchObject({
        0 : { x : 1, y : 2,  z : 0, w : 0 },
        1 : { x : 3, y : 4,  z : 0, w : 0 },
        2 : { x : 0, y : 0,  z : 1, w : 0 },
        3 : { x : 0, y : 0,  z : 0, w : 1 },
    })
})
it('should accept mat3', () => {
    expect(mat4(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ))).toMatchObject({
        0 : { x : 1, y : 2,  z : 3, w : 0 },
        1 : { x : 4, y : 5,  z : 6, w : 0 },
        2 : { x : 7, y : 8,  z : 9, w : 0 },
        3 : { x : 0, y : 0,  z : 0, w : 1 },
    })
})
it('should accept mat4', () => {
    expect(mat4(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ))).toMatchObject({
        0 : { x : 1,  y : 2,  z : 3,  w : 4 },
        1 : { x : 5,  y : 6,  z : 7,  w : 8 },
        2 : { x : 9,  y : 10, z : 11, w : 12 },
        3 : { x : 13, y : 14, z : 15, w : 16 },
    })
})
it('should export transpose', () => {
    expect(mat4.transpose).toBe(transposeMatrix4x4)
})
