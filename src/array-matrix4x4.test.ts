import { ArrayMatrix4x4 } from './glm'

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
