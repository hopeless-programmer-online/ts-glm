import { mat2, transposeMatrix2x2 } from './glm'

it('should transpose mat2', () => {
    expect( transposeMatrix2x2(mat2(
        1, 2,
        3, 4,
    )) ).toMatchObject({
        0 : { x : 1, y : 3 },
        1 : { x : 2, y : 4 },
    })
})
