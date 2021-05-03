import { ArrayMatrix3x3 } from './glm'

it('should has default', () => {
    expect(ArrayMatrix3x3.default).toMatchObject({
        values : [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ],
    })
})
it('should has constructor()', () => {
    const m = new ArrayMatrix3x3

    expect(m).toMatchObject({
        0 : { x : 1, y : 0, z : 0 },
        1 : { x : 0, y : 1, z : 0 },
        2 : { x : 0, y : 0, z : 1 },
    })
})
it('should has constructor({})', () => {
    const m = new ArrayMatrix3x3({})

    expect(m).toMatchObject({
        0 : { x : 1, y : 0, z : 0 },
        1 : { x : 0, y : 1, z : 0 },
        2 : { x : 0, y : 0, z : 1 },
    })
})
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
it('should provide rows', () => {
    expect(new ArrayMatrix3x3({ values : [
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ] })).toMatchObject({ rows : {
        0 : { x : 1, y : 4, z : 7 },
        1 : { x : 2, y : 5, z : 8 },
        2 : { x : 3, y : 6, z : 9 },
    } })
})
it('two default matrices should operate on different arrays', () => {
    const a = new ArrayMatrix3x3
    const b = new ArrayMatrix3x3

    a[0][0] = 2
    a[0][1] = 3
    a[0][2] = 4
    a[1][0] = 5
    a[1][1] = 6
    a[1][2] = 7
    a[2][0] = 8
    a[2][1] = 9
    a[2][2] = 10

    expect(a).toMatchObject({
        0 : { x : 2, y : 3, z : 4  },
        1 : { x : 5, y : 6, z : 7  },
        2 : { x : 8, y : 9, z : 10 },
    })
    expect(b).toMatchObject({
        0 : { x : 1, y : 0, z : 0 },
        1 : { x : 0, y : 1, z : 0 },
        2 : { x : 0, y : 0, z : 1 },
    })
})
