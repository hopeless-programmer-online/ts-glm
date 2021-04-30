import { mat4 } from './glm'

it('should implement toArray()', () => {
    expect(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ).toArray()).toMatchObject([
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ])
})
it('should implement toString()', () => {
    expect(mat4(
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ).toString()).toBe(
        `Matrix4x4 {\n` +
        `    0 : { x : 1, y : 2, z : 3, w : 4 }\n` +
        `    1 : { x : 5, y : 6, z : 7, w : 8 }\n` +
        `    2 : { x : 9, y : 10, z : 11, w : 12 }\n` +
        `    3 : { x : 13, y : 14, z : 15, w : 16 }\n` +
        `}`
    )
})
