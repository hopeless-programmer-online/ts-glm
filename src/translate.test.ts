import { multiplyMatrix4x4Vector4 as mul, translate, vec3, vec4 } from './glm'

it('should translate vec4 on multiplication', () => {
    expect( mul(
        translate(vec3(1, 2, 3)),
        vec4(4, 5, 6, 1),
    ) ).toMatchObject({
        x : 1 + 4,
        y : 2 + 5,
        z : 3 + 6,
    })
})
