import { adj, mat2 } from './glm'

it('should support mat2', () => {
    const a = adj(mat2([ 1, 3, 2, 4 ]))

    expect(a[0][0]).toBe(4)
    expect(a[1][0]).toBe(-2)
    expect(a[0][1]).toBe(-3)
    expect(a[1][1]).toBe(1)
})
