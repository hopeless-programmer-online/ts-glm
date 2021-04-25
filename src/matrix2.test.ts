import { Matrix2 } from './glm'

it('should implement columnMajor()', () => {
    expect(Matrix2.columnMajor([ 1, 2, 3, 4 ])).toMatchObject({
        0 : {
            x : 1, 0 : 1, r : 1,
            y : 2, 1 : 2, g : 2,
        },
        1 : {
            x : 3, 0 : 3, r : 3,
            y : 4, 1 : 4, g : 4,
        },
    })
})
it('should implement rowMajor()', () => {
    expect(Matrix2.rowMajor([ 1, 2, 3, 4 ])).toMatchObject({
        0 : { x : 1, y : 3 },
        1 : { x : 2, y : 4 },
    })
})
it('should support [] getters/setters', () => {
    const m = Matrix2.columnMajor([ 1, 2, 3, 4 ])

    expect(m[0]).toMatchObject({
        x : 1, 0 : 1, r : 1,
        y : 2, 1 : 2, g : 2,
    })
    expect(m[1]).toMatchObject({
        x : 3, 0 : 3, r : 3,
        y : 4, 1 : 4, g : 4,
    })

    m[0].x = 11
    m[0].y = 12
    m[1].x = 13
    m[1].y = 14

    expect(m).toMatchObject({
        0 : {
            x : 11, 0 : 11, r : 11,
            y : 12, 1 : 12, g : 12,
        },
        1 : {
            x : 13, 0 : 13, r : 13,
            y : 14, 1 : 14, g : 14,
        },
    })
})
it('should support column clone', () => {
    const m = Matrix2.columnMajor([ 1, 2, 3, 4 ])
    const r0 = m[0].clone()
    const r1 = m[1].clone()

    r0.x = 11
    r0.y = 12
    r1.x = 13
    r1.y = 14

    expect(m).toMatchObject({
        0 : {
            x : 1, 0 : 1, r : 1,
            y : 2, 1 : 2, g : 2,
        },
        1 : {
            x : 3, 0 : 3, r : 3,
            y : 4, 1 : 4, g : 4,
        },
    })
})
it('should support rows access', () => {
    const m = Matrix2.columnMajor([ 1, 2, 3, 4 ])

    expect(m.rows[0]).toMatchObject({ x : 1, y : 3 })
    expect(m.rows[1]).toMatchObject({ x : 2, y : 4 })
})
it('should support columns access', () => {
    const m = Matrix2.columnMajor([ 1, 2, 3, 4 ])

    expect(m.columns[0]).toMatchObject({ x : 1, y : 2 })
    expect(m.columns[1]).toMatchObject({ x : 3, y : 4 })
})
