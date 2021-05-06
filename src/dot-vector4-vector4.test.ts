import { dotVector4Vector4 as dot, vec4 } from './glm'

it('should dot NumberVector4 and NumberVector4', () => {
    expect(dot( vec4(1, 2, 3, 4), vec4(5, 6, 7, 8) )).toBe(1 * 5 + 2 * 6 + 3 * 7 + 4 * 8)
})
