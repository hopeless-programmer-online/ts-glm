import { vec3, Vector3 } from './glm'

it('should accept x, y, z', () => {
    expect(vec3(1, 2, 3)).toMatchObject<Vector3>({
        x : 1,
        y : 2,
        z : 3,
    })
})
