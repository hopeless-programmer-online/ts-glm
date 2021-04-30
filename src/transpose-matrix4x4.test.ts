import { mat4, transposeMatrix4x4 } from './glm'

it('should transpose mat4', () => {
    expect( transposeMatrix4x4(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    )) ).toMatchObject({
        0 : { x : 1, y : 5, z : 9,  w : 13 },
        1 : { x : 2, y : 6, z : 10, w : 14 },
        2 : { x : 3, y : 7, z : 11, w : 15 },
        3 : { x : 4, y : 8, z : 12, w : 16 },
    })
})
