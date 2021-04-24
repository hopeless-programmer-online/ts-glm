import { Matrix3 } from './glm'

it('should support [] getters/setters', () => {
    const m = new Matrix3({ values : [
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
    ] })

    expect(m[0]).toMatchObject({ x : 1, y : 4, z : 7 })
    expect(m[1]).toMatchObject({ x : 2, y : 5, z : 8 })
    expect(m[2]).toMatchObject({ x : 3, y : 6, z : 9 })

    m[0].x = 11
    m[0].y = 12
    m[0].z = 13
    m[1].x = 14
    m[1].y = 15
    m[1].z = 16
    m[2].x = 17
    m[2].y = 18
    m[2].z = 19

    expect(m[0]).toMatchObject({ x : 11, y : 12, z : 13 })
    expect(m[1]).toMatchObject({ x : 14, y : 15, z : 16 })
    expect(m[2]).toMatchObject({ x : 17, y : 18, z : 19 })
})
