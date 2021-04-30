import { mat2 } from './glm'

it('should implement toArray()', () => {
    expect(mat2(
        1, 2,
        3, 4,
    ).toArray()).toMatchObject([
        1, 2,
        3, 4,
    ])
})
it('should implement toString()', () => {
    expect(mat2(
        1, 2,
        3, 4,
    ).toString()).toBe(
        `Matrix2x2 {\n` +
        `    0 : { x : 1, y : 2 }\n` +
        `    1 : { x : 3, y : 4 }\n` +
        `}`
    )
})
