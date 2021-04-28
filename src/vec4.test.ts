import { vec4, Vector4 } from './glm'

it('should accept nothing', () => {
    expect(vec4()).toMatchObject<Vector4>({
        x : Vector4.default.x,
        y : Vector4.default.y,
        z : Vector4.default.z,
        w : Vector4.default.w,
    })
})
it('should accept single scalar', () => {
    expect(vec4(5)).toMatchObject<Vector4>({
        x : 5,
        y : 5,
        z : 5,
        w : 5,
    })
})
it('should accept x, y, z, w', () => {
    expect(vec4(1, 2, 3, 4)).toMatchObject<Vector4>({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
