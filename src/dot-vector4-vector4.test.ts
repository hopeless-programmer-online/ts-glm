import { dotVector4Vector4, NumberVector4 } from './glm'

it('should add NumberVector4 and NumberVector4', () => {
    expect(dotVector4Vector4(
        new NumberVector4({ x : 1, y : 2, z : 3, w : 4 }),
        new NumberVector4({ x : 5, y : 6, z : 7, w : 8 }),
    )).toBe(1 * 5 + 2 * 6 + 3 * 7 + 4 * 8)
})
