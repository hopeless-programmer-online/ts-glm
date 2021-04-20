import { det, mat2 } from "./glm"

it('should support mat2', () => {
    expect(det(mat2([ 1, 3, 2, 4 ]))).toBe(1 * 4 - 2 * 3)
})
