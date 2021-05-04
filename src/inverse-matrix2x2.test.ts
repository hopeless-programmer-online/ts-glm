import { inverseMatrix2x2 as inv, mat2, multiplyMatrix2x2Matrix2x2 as mul } from './glm'

it('should inverse mat2', () => {
    const m = mat2(
        1, 2,
        3, 4,
    )

    expect( mul(m, inv(m)) ).toMatchObject({
        0 : { x : 1, y : 0 },
        1 : { x : 0, y : 1 },
    })
})
