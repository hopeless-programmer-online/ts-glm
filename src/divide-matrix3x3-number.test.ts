import { divideMatrix3x3Number as op, mat3 } from './glm'

it('should divide Matrix3x3 and number', () => {
    expect(op(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 / 20, y : 2 / 20, z : 3 / 20 },
        1 : { x : 4 / 20, y : 5 / 20, z : 6 / 20 },
        2 : { x : 7 / 20, y : 8 / 20, z : 9 / 20 },
    })
})

