import { ArrayMatrix2x2 } from './glm'

it('should has default', () => {
    expect(ArrayMatrix2x2.default).toMatchObject({
        values : [
            1, 0,
            0, 1,
        ],
    })
})
it('should has constructor()', () => {
    const m = new ArrayMatrix2x2

    expect(m).toMatchObject({
        0 : { x : 1, y : 0 },
        1 : { x : 0, y : 1 },
    })
})
it('should has constructor({})', () => {
    const m = new ArrayMatrix2x2({})

    expect(m).toMatchObject({
        0 : { x : 1, y : 0 },
        1 : { x : 0, y : 1 },
    })
})
it('should has constructor({ values })', () => {
    const m = new ArrayMatrix2x2({ values : [
        1, 2,
        3, 4,
    ] })

    expect(m).toMatchObject({
        0 : { x : 1, y : 2 },
        1 : { x : 3, y : 4 },
    })
})
it('accessor vector2 should change matrix', () => {
    const m = new ArrayMatrix2x2({ values : [
        1, 2,
        3, 4,
    ] })

    m[0].x = 5
    m[0].y = 6
    m[1].x = 7
    m[1].y = 8

    expect(m).toMatchObject({
        0 : { x : 5, y : 6 },
        1 : { x : 7, y : 8 },
    })
})
it('should provide rows', () => {
    expect(new ArrayMatrix2x2({ values : [
        1, 2,
        3, 4,
    ] })).toMatchObject({ rows : {
        0 : { x : 1, y : 3 },
        1 : { x : 2, y : 4 },
    } })
})
it('two default matrices should operate on different arrays', () => {
    const a = new ArrayMatrix2x2
    const b = new ArrayMatrix2x2

    a[0][0] = 2
    a[0][1] = 3
    a[1][0] = 4
    a[1][1] = 5

    expect(a).toMatchObject({
        0 : { x : 2, y : 3 },
        1 : { x : 4, y : 5 },
    })
    expect(b).toMatchObject({
        0 : { x : 1, y : 0 },
        1 : { x : 0, y : 1 },
    })
})
