import { ArrayMatrix4x4 } from './glm'

it('should has default', () => {
    expect(ArrayMatrix4x4.default).toMatchObject({
        values : [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ],
    })
})
it('should has constructor()', () => {
    const m = new ArrayMatrix4x4

    expect(m).toMatchObject({
        0 : { x : 1, y : 0, z : 0, w : 0 },
        1 : { x : 0, y : 1, z : 0, w : 0 },
        2 : { x : 0, y : 0, z : 1, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
it('should has constructor({})', () => {
    const m = new ArrayMatrix4x4({})

    expect(m).toMatchObject({
        0 : { x : 1, y : 0, z : 0, w : 0 },
        1 : { x : 0, y : 1, z : 0, w : 0 },
        2 : { x : 0, y : 0, z : 1, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
it('should has constructor({ values })', () => {
    const m = new ArrayMatrix4x4({ values : [
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ] })

    expect(m).toMatchObject({
        0 : { x : 1,  y : 2,  z : 3,  w : 4 },
        1 : { x : 5,  y : 6,  z : 7,  w : 8 },
        2 : { x : 9,  y : 10, z : 11, w : 12 },
        3 : { x : 13, y : 14, z : 15, w : 16 },
    })
})
it('accessor vector3 should change matrix', () => {
    const m = new ArrayMatrix4x4({ values : [
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ] })

    m[0].x = 101
    m[0].y = 102
    m[0].z = 103
    m[0].w = 104
    m[1].x = 105
    m[1].y = 106
    m[1].z = 107
    m[1].w = 108
    m[2].x = 109
    m[2].y = 110
    m[2].z = 111
    m[2].w = 112
    m[3].x = 113
    m[3].y = 114
    m[3].z = 115
    m[3].w = 116

    expect(m).toMatchObject({
        0 : { x : 101, y : 102, z : 103, w : 104 },
        1 : { x : 105, y : 106, z : 107, w : 108 },
        2 : { x : 109, y : 110, z : 111, w : 112 },
        3 : { x : 113, y : 114, z : 115, w : 116 },
    })
})
it('should provide rows', () => {
    expect(new ArrayMatrix4x4({ values : [
        1,  2,  3,  4,
        5,  6,  7,  8,
        9,  10, 11, 12,
        13, 14, 15, 16,
    ] })).toMatchObject({ rows : {
        0 : { x : 1, y : 5, z : 9,  w : 13 },
        1 : { x : 2, y : 6, z : 10, w : 14 },
        2 : { x : 3, y : 7, z : 11, w : 15 },
        3 : { x : 4, y : 8, z : 12, w : 16 },
    } })
})
it('two default matrices should operate on different arrays', () => {
    const a = new ArrayMatrix4x4
    const b = new ArrayMatrix4x4

    a[0][0] = 2
    a[0][1] = 3
    a[0][2] = 4
    a[0][3] = 5
    a[1][0] = 6
    a[1][1] = 7
    a[1][2] = 8
    a[1][3] = 9
    a[2][0] = 10
    a[2][1] = 11
    a[2][2] = 12
    a[2][3] = 13
    a[3][0] = 14
    a[3][1] = 15
    a[3][2] = 16
    a[3][3] = 17

    expect(a).toMatchObject({
        0 : { x : 2,  y : 3,  z : 4,  w : 5  },
        1 : { x : 6,  y : 7,  z : 8,  w : 9  },
        2 : { x : 10, y : 11, z : 12, w : 13 },
        3 : { x : 14, y : 15, z : 16, w : 17 },
    })
    expect(b).toMatchObject({
        0 : { x : 1, y : 0, z : 0, w : 0 },
        1 : { x : 0, y : 1, z : 0, w : 0 },
        2 : { x : 0, y : 0, z : 1, w : 0 },
        3 : { x : 0, y : 0, z : 0, w : 1 },
    })
})
