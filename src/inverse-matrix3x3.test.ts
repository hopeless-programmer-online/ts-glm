import { inverseMatrix3x3 as inv, mat3, multiplyMatrix3x3Matrix3x3 as mul } from './glm'

it('should inverse mat3', () => {
    const m = mat3(
        1, 4, 7,
        2, 5, 2,
        3, 6, 9,
    )
    const i = mul(m, inv(m))

    expect(i[0][0]).toBeCloseTo(1, 10)
    expect(i[1][0]).toBeCloseTo(0, 10)
    expect(i[2][0]).toBeCloseTo(0, 10)

    expect(i[0][1]).toBeCloseTo(0, 10)
    expect(i[1][1]).toBeCloseTo(1, 10)
    expect(i[2][1]).toBeCloseTo(0, 10)

    expect(i[0][2]).toBeCloseTo(0, 10)
    expect(i[1][2]).toBeCloseTo(0, 10)
    expect(i[2][2]).toBeCloseTo(1, 10)
})
