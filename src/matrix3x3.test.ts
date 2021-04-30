import { mat3 } from './glm'

it('should implement toString()', () => {
    expect(mat3(
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ).toString()).toBe(
        `Matrix3x3 {\n` +
        `    0 : { x : 1, y : 2, z : 3 }\n` +
        `    1 : { x : 4, y : 5, z : 6 }\n` +
        `    2 : { x : 7, y : 8, z : 9 }\n` +
        `}`
    )
})
