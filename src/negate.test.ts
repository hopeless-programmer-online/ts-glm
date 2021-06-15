import { negate as neg, vec2, vec3, vec4 } from './glm'

it('should square number', () => {
    expect(neg(5)).toBe(-5)
})
it('should square number', () => {
    expect(neg(vec2(1, 2))).toMatchObject({
        x : -1,
        y : -2,
    })
})
it('should square number', () => {
    expect(neg(vec3(1, 2, 3))).toMatchObject({
        x : -1,
        y : -2,
        z : -3,
    })
})
it('should square number', () => {
    expect(neg(vec4(1, 2, 3, 4))).toMatchObject({
        x : -1,
        y : -2,
        z : -3,
        w : -4,
    })
})
