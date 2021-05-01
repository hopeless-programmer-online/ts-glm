import { divideMatrix2x2Number as op, mat2 } from './glm'

it('should divide Matrix2x2 and number', () => {
    expect(op(
        mat2(
            1, 2,
            3, 4,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 / 20, y : 2 / 20 },
        1 : { x : 3 / 20, y : 4 / 20 },
    })
})

