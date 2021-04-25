import { mat2, rotate2 } from './glm'

it('should export rotate2', () => {
    expect(mat2.rotate).toBe(rotate2)
})
it('should support columnMajor', () => {
    const m = mat2.columnMajor([ 1, 2, 3, 4 ])

    expect(m[0]).toMatchObject({ x : 1, y : 2 })
    expect(m[1]).toMatchObject({ x : 3, y : 4 })
})
it('should support rowMajor', () => {
    const m = mat2.rowMajor([ 1, 2, 3, 4 ])

    expect(m[0]).toMatchObject({ x : 1, y : 3 })
    expect(m[1]).toMatchObject({ x : 2, y : 4 })
})