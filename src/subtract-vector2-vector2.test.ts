import { subtractVector2Vector2, NumberVector2 } from './glm'

it('should subtract NumberVector2 and NumberVector2', () => {
    expect(subtractVector2Vector2(
        new NumberVector2({ x : 1, y : 2 }),
        new NumberVector2({ x : 3, y : 4 }),
    )).toMatchObject({
        x : 1 - 3,
        y : 2 - 4,
    })
})
