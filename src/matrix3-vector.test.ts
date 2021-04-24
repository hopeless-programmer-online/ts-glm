import { Matrix3Vector } from './glm'

it('should support row proxy', () => {
    const values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    const column = new Matrix3Vector({ values, stride : 3 })

    expect(column).toMatchObject({ x : 1, y : 4, z : 7 })

    column.x = 11
    column.y = 12
    column.z = 13

    expect(column).toMatchObject({ x : 11, y : 12, z : 13 })
    expect(values).toMatchObject([ 11, 2, 3, 12, 5, 6, 13, 8, 9 ])
})
