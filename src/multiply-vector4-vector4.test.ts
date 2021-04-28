import { multiplyVector4Vector4, NumberVector4 } from './glm'

it('should multiply NumberVector4 and NumberVector4', () => {
    expect(multiplyVector4Vector4(
        new NumberVector4({ x : 1, y : 2, z : 3, w : 4 }),
        new NumberVector4({ x : 5, y : 6, z : 7, w : 8 }),
    )).toMatchObject({
        x : 1 * 5,
        y : 2 * 6,
        z : 3 * 7,
        w : 4 * 8,
    })
})
