import { dotVector4Vector4, vec4 } from './glm'

it('should add NumberVector4 and NumberVector4', () => {
    expect(dotVector4Vector4( vec4(1, 2, 3, 4), vec4(5, 6, 7, 8) )).toBe(1 * 5 + 2 * 6 + 3 * 7 + 4 * 8)
})
