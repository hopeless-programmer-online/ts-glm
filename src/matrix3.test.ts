import { Matrix3 } from './glm'

it('should implement columnMajor()', () => {
    expect(Matrix3.columnMajor([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ])).toMatchObject({
        0 : { x : 1, y : 2, z : 3 },
        1 : { x : 4, y : 5, z : 6 },
        2 : { x : 7, y : 8, z : 9 },
    })
})
it('should implement rowMajor()', () => {
    expect(Matrix3.rowMajor([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ])).toMatchObject({
        0 : { x : 1, y : 4, z : 7 },
        1 : { x : 2, y : 5, z : 8 },
        2 : { x : 3, y : 6, z : 9 },
    })
})

it('should support [] getters/setters', () => {
    const m = Matrix3.columnMajor([
        1, 4, 7,
        2, 5, 8,
        3, 6, 9,
    ])

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
it('should support rows access', () => {
    const m = Matrix3.columnMajor([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ])

    expect(m.rows[0]).toMatchObject({ x : 1, y : 4, z : 7 })
    expect(m.rows[1]).toMatchObject({ x : 2, y : 5, z : 8 })
    expect(m.rows[2]).toMatchObject({ x : 3, y : 6, z : 9 })
})
it('should support columns access', () => {
    const m = Matrix3.columnMajor([
        1, 2, 3,
        4, 5, 6,
        7, 8, 9,
    ])

    expect(m.columns[0]).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(m.columns[1]).toMatchObject({ x : 4, y : 5, z : 6 })
    expect(m.columns[2]).toMatchObject({ x : 7, y : 8, z : 9 })
})
