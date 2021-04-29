import { ArrayMatrix2x2 } from './glm'

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
