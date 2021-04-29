import { ArrayMatrix3x3 } from './glm'

it('should has constructor({ values })', () => {
    const m = new ArrayMatrix3x3({ values : [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ] })

    expect(m).toMatchObject({
        0 : { x : 1, y : 2, z : 3 },
        1 : { x : 4, y : 5, z : 6 },
        2 : { x : 7, y : 8, z : 9 },
    })
})
it('accessor vector3 should change matrix', () => {
    const m = new ArrayMatrix3x3({ values : [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ] })

    m[0].x = 11
    m[0].y = 12
    m[0].z = 13
    m[1].x = 14
    m[1].y = 15
    m[1].z = 16
    m[2].x = 17
    m[2].y = 18
    m[2].z = 19

    expect(m).toMatchObject({
        0 : { x : 11, y : 12, z : 13 },
        1 : { x : 14, y : 15, z : 16 },
        2 : { x : 17, y : 18, z : 19 },
    })
})
