import { divideVector4Vector4, vec4 } from './glm'

it('should divide NumberVector4 and NumberVector4', () => {
    expect(divideVector4Vector4( vec4(1, 2, 3, 4), vec4(5, 6, 7, 8) )).toMatchObject({
        x : 1 / 5,
        y : 2 / 6,
        z : 3 / 7,
        w : 4 / 8,
    })
})
