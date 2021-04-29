import { mat4 } from './glm'

it('should accept 9 numbers', () => {
    expect(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    )).toMatchObject({
        0 : { x : 1,  y : 2,  z : 3,  w : 4 },
        1 : { x : 5,  y : 6,  z : 7,  w : 8 },
        2 : { x : 9,  y : 10, z : 11, w : 12 },
        3 : { x : 13, y : 14, z : 15, w : 16 },
    })
})
