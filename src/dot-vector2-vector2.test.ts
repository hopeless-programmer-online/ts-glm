import { dotVector2Vector2, NumberVector2 } from './glm'

it('should add NumberVector2 and NumberVector2', () => {
    expect(dotVector2Vector2(
        new NumberVector2({ x : 1, y : 2 }),
        new NumberVector2({ x : 3, y : 4 }),
    )).toBe(1 * 3 + 2 * 4)
})
