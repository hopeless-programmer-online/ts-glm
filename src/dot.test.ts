import { dot, vec2, vec3, vec4 } from './glm'

it('should dot [ number, number ] and { x, y }', () => {
    expect(dot( [ 1, 2 ], { x : 3, y : 4 } )).toBe(1 * 3 + 2 * 4)
})
it('should dot vec2 and vec2', () => {
    expect(dot( vec2(1, 2), vec2(3, 4) )).toBe(1 * 3 + 2 * 4)
})
it('should dot vec2 and vec3 as vec2', () => {
    expect(dot( vec2(1, 2), vec3(3, 4, 5) )).toBe(1 * 3 + 2 * 4)
})
it('should dot vec2 and vec4 as vec2', () => {
    expect(dot( vec2(1, 2), vec4(3, 4, 5, 6) )).toBe(1 * 3 + 2 * 4)
})
it('should dot vec3 and vec3', () => {
    expect(dot( vec3(1, 2, 3), vec3(4, 5, 6) )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
it('should dot vec3 and vec2 as vec2', () => {
    expect(dot( vec3(1, 2, 3), vec2(4, 5) )).toBe(1 * 4 +  2 * 5)
})
it('should dot vec3 and vec4 as vec3', () => {
    expect(dot( vec3(1, 2, 3), vec4(4, 5, 6, 7) )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
it('should dot vec4 and vec2', () => {
    expect(dot( vec4(1, 2, 3, 4), vec2(5, 6) )).toBe(1 * 5 + 2 * 6)
})
it('should dot vec4 and vec3', () => {
    expect(dot( vec4(1, 2, 3, 4), vec3(5, 6, 7) )).toBe(1 * 5 + 2 * 6 + 3 * 7)
})
it('should dot vec4 and vec4', () => {
    expect(dot( vec4(1, 2, 3, 4), vec4(5, 6, 7, 8) )).toBe(1 * 5 + 2 * 6 + 3 * 7 + 4 * 8)
})
