import { addMatrix4x4Number as op, mat4 } from './glm'

it('should add Matrix4x4 and number', () => {
    expect(op(
        mat4(
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15, 16,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 + 20, y : 2 + 20, z : 3 + 20, w : 4 + 20 },
        1 : { x : 5 + 20, y : 6 + 20, z : 7 + 20, w : 8 + 20 },
        2 : { x : 9 + 20, y : 10 + 20, z : 11 + 20, w : 12 + 20 },
        3 : { x : 13 + 20, y : 14 + 20, z : 15 + 20, w : 16 + 20 },
    })
})

