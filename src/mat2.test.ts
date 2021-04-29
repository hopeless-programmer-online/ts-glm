import { mat2 } from './glm'

it('should accept 4 numbers', () => {
    expect(mat2(
        1, 2,
        3, 4,
    )).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 3, y : 4 },
    })
})
