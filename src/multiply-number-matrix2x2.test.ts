import { multiplyNumberMatrix2x2 as op, mat2 } from './glm'

it('should multiply number and Matrix2x2', () => {
    expect(op(
        20,
        mat2(
            1, 2,
            3, 4,
        ),
    )).toMatchObject({
        0 : { x : 20 * 1, y : 20 * 2 },
        1 : { x : 20 * 3, y : 20 * 4 },
    })
})

