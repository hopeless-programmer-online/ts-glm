import { addNumberMatrix3x3 as op, mat3 } from './glm'

it('should add number and Matrix3x3', () => {
    expect(op(
        20,
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
    )).toMatchObject({
        0 : { x : 20 + 1, y : 20 + 2, z : 20 + 3 },
        1 : { x : 20 + 4, y : 20 + 5, z : 20 + 6 },
        2 : { x : 20 + 7, y : 20 + 8, z : 20 + 9 },
    })
})

