import { dotVector3Vector3, vec3 } from './glm'

it('should add NumberVector3 and NumberVector3', () => {
    expect(dotVector3Vector3( vec3(1, 2, 3), vec3(4, 5, 6) )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
