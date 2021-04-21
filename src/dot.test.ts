import { dot, vec2, Vector2 } from './glm'

it('should be a function', () => {
    expect(typeof dot).toBe('function')
})
it('should accept numbers', () => {
    expect(dot(2, 3)).toBe(6)
})
it('should accept vec2', () => {
    expect(dot(vec2(1, 2), vec2(3, 4))).toBe(11)
})
it('should accept xy', () => {
    expect(dot({ x : 1, y : 2 }, { x : 3, y : 4 })).toBe(11)
})
