import { mul, rotate2, vec2 } from './glm'

const { PI, sin, cos } = Math

it('should rotate vec2(1, 0) clockwise', () => {
    const { x, y } = mul( rotate2(PI / 2), vec2(1, 0) )

    expect(x).toBeCloseTo(0, 10)
    expect(y).toBeCloseTo(-1, 10)
})
it('should rotate vec2(0, 1) clockwise', () => {
    const { x, y } = mul( rotate2(PI / 2), vec2(0, 1) )

    expect(x).toBeCloseTo(1, 10)
    expect(y).toBeCloseTo(0, 10)
})
it('should rotate vec2(0, 1) clockwise on PI/6', () => {
    const { x, y } = mul( rotate2(PI / 6), vec2(0, 1) )

    expect(x).toBeCloseTo(sin(PI / 6), 10)
    expect(y).toBeCloseTo(cos(PI / 6), 10)
})
it('should accumulate rotation ', () => {
    const { x, y } = mul( mul(rotate2(PI / 3), rotate2(PI / 6)), vec2(0, 1) )

    expect(x).toBeCloseTo(1, 10)
    expect(y).toBeCloseTo(0, 10)
})
