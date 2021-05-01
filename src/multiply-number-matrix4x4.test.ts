import { multiplyNumberMatrix4x4 as op, mat4 } from './glm'

it('should multiply number and Matrix4x4', () => {
    expect(op(
        20,
        mat4(
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ),
    )).toMatchObject({
        0 : { x : 20 * 1, y : 20 * 2, z : 20 * 3, w : 20 * 4 },
        1 : { x : 20 * 5, y : 20 * 6, z : 20 * 7, w : 20 * 8 },
        2 : { x : 20 * 9, y : 20 * 10, z : 20 * 11, w : 20 * 12 },
        3 : { x : 20 * 13, y : 20 * 14, z : 20 * 15, w : 20 * 16 },
    })
})

