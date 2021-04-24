import { dot, vec2, vec3 } from './glm'

it('should be a function', () => {
    expect(typeof dot).toBe('function')
})
it('should accept numbers', () => {
    expect(dot(2, 3)).toBe(6)
})
it('should accept vec2', () => {
    expect(dot(vec2(1, 2), vec2(3, 4))).toBe(1 * 3 + 2 * 4)
})
it('should accept { x, y }', () => {
    expect(dot({ x : 1, y : 2 }, { x : 3, y : 4 })).toBe(1 * 3 + 2 * 4)
})
it('should accept { r, g }', () => {
    expect(dot({ r : 1, g : 2 }, { x : 3, y : 4 })).toBe(1 * 3 + 2 * 4)
})
it('should accept [ number, number ]', () => {
    expect(dot([ 1, 2 ], { x : 3, y : 4 })).toBe(1 * 3 + 2 * 4)
})
it('should accept vec3', () => {
    expect(dot(vec3(1, 2, 3), vec3(4, 5, 6))).toBe(1 * 4 + 2 * 5 + 3 * 6)
})
it('should accept { x, y, z }', () => {
    expect(dot({ x : 1, y : 2, z : 3 }, { x : 4, y : 5, z : 6 })).toBe(1 * 4 + 2 * 5 + 3 * 6)
})
it('should accept { r, g, b }', () => {
    expect(dot({ r : 1, g : 2, b : 3 }, { x : 4, y : 5, z : 6 })).toBe(1 * 4 + 2 * 5 + 3 * 6)
})
it('should accept [ number, number, number ]', () => {
    expect(dot([ 1, 2, 3 ], { x : 4, y : 5, z : 6 })).toBe(1 * 4 + 2 * 5 + 3 * 6)
})
