import { square as sqr, vec2, vec3, vec4 } from './glm'

it('should square number', () => {
    expect(sqr(5)).toBe(5**2)
})
it('should square number', () => {
    expect(sqr(vec2(1, 2))).toBe(1**2 + 2**2)
})
it('should square number', () => {
    expect(sqr(vec3(1, 2, 3))).toBe(1**2 + 2**2 + 3**2)
})
it('should square number', () => {
    expect(sqr(vec4(1, 2, 3, 4))).toBe(1**2 + 2**2 + 3**2 + 4**2)
})
