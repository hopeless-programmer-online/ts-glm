import { mat2, transposeMatrix2x2 } from './glm'

it('should accept 4 numbers', () => {
    expect(mat2(
        1, 2,
        3, 4,
    )).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 3, y : 4 },
    })
})
it('should export transpose', () => {
    expect(mat2.transpose).toBe(transposeMatrix2x2)
})
