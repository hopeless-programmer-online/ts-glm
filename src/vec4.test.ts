import { vec4, Vector4 } from './glm'

it('should accept x, y, z, w', () => {
    expect(vec4(1, 2, 3, 4)).toMatchObject<Vector4>({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
