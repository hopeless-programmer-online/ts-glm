import { inv, mat2, mul } from './glm'

it('should make identity matrix on multiplication', () => {
    const a = mat2([ 1, 3, 2, 4 ])
    const i = mul(a, inv(a))

    expect(i[0][0]).toBeCloseTo(1, 10)
    expect(i[1][0]).toBeCloseTo(0, 10)
    expect(i[0][1]).toBeCloseTo(0, 10)
    expect(i[1][1]).toBeCloseTo(1, 10)
})