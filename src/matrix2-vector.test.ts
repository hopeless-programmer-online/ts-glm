import { Matrix2Vector } from './glm'

it('should support column proxy', () => {
    const values = [ 1, 2, 3, 4 ]
    const row = new Matrix2Vector({ values, offset : 2 })

    expect(row).toMatchObject({ x : 3, y : 4 })

    row.x = 5
    row.y = 10

    expect(row).toMatchObject({ x : 5, y : 10 })
    expect(values).toMatchObject([ 1, 2, 5, 10 ])
})
it('should support row proxy', () => {
    const values = [ 1, 2, 3, 4 ]
    const column = new Matrix2Vector({ values, stride : 2 })

    expect(column).toMatchObject({ x : 1, y : 3 })

    column.x = 5
    column.y = 10

    expect(column).toMatchObject({ x : 5, y : 10 })
    expect(values).toMatchObject([ 5, 2, 10, 4 ])
})
