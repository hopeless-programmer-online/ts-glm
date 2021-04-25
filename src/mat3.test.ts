import { mat3 } from './glm'

it('should support array of 9 numbers', () => {
    const m = mat3([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ])

    expect(m[0]).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(m[1]).toMatchObject({ x : 4, y : 5, z : 6 })
    expect(m[2]).toMatchObject({ x : 7, y : 8, z : 9 })
})