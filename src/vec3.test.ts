import { vec3, Vector3 } from './glm'

it('should accept nothing', () => {
    expect(vec3()).toMatchObject<Vector3>({
        x : Vector3.default.x,
        y : Vector3.default.y,
        z : Vector3.default.z,
    })
})
it('should accept single scalar', () => {
    expect(vec3(5)).toMatchObject<Vector3>({
        x : 5,
        y : 5,
        z : 5,
    })
})
it('should accept x, y, z', () => {
    expect(vec3(1, 2, 3)).toMatchObject<Vector3>({
        x : 1,
        y : 2,
        z : 3,
    })
})
