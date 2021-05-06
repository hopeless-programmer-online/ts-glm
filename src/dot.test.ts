import { dot, vec2, vec3, vec4 } from './glm'

it('should dot Vector2 and Vector2', () => {
    expect(dot( vec2(1, 2), vec2(3, 4) )).toBe(1 * 3 + 2 * 4)
})
it('should add NumberVector3 and NumberVector3', () => {
    expect(dot( vec3(1, 2, 3), vec3(4, 5, 6) )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
it('should add NumberVector4 and NumberVector4', () => {
    expect(dot( vec4(1, 2, 3, 4), vec4(5, 6, 7, 8) )).toBe(1 * 5 + 2 * 6 + 3 * 7 + 4 * 8)
})
