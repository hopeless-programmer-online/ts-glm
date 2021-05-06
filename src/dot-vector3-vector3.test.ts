import { dotVector3Vector3 as dot, vec3 } from './glm'

it('should dot NumberVector3 and NumberVector3', () => {
    expect(dot( vec3(1, 2, 3), vec3(4, 5, 6) )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
