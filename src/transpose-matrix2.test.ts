import { mat2, transposeMatrix2 as transpose } from './glm'

it('should transpose mat2', () => {
    const m = transpose(mat2(
        1, 2,
        3, 4,
    ))

    expect(m).toMatchObject({
        0 : { x : 1, y : 3 },
        1 : { x : 2, y : 4 },
    })
})
