import { inverseMatrix4x4 as inv, mat4, multiplyMatrix4x4Matrix4x4 as mul } from './glm'

it('should inverse mat4', () => {
    const m = mat4(
        1, 0, 0, 0,
        0, 2, 0, 0,
        0, 0, 3, 0,
        0, 0, 0, 4,
    )
    const i = mul(m, inv(m))

    expect(i[0][0]).toBeCloseTo(1, 10)
    expect(i[1][0]).toBeCloseTo(0, 10)
    expect(i[2][0]).toBeCloseTo(0, 10)
    expect(i[3][0]).toBeCloseTo(0, 10)

    expect(i[0][1]).toBeCloseTo(0, 10)
    expect(i[1][1]).toBeCloseTo(1, 10)
    expect(i[2][1]).toBeCloseTo(0, 10)
    expect(i[3][1]).toBeCloseTo(0, 10)

    expect(i[0][2]).toBeCloseTo(0, 10)
    expect(i[1][2]).toBeCloseTo(0, 10)
    expect(i[2][2]).toBeCloseTo(1, 10)
    expect(i[3][2]).toBeCloseTo(0, 10)

    expect(i[0][3]).toBeCloseTo(0, 10)
    expect(i[1][3]).toBeCloseTo(0, 10)
    expect(i[2][3]).toBeCloseTo(0, 10)
    expect(i[3][3]).toBeCloseTo(1, 10)
})
