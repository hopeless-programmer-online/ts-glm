import { multiplyVector2Vector2, vec2 } from './glm'

it('should multiply Vector2 and Vector2', () => {
    expect(multiplyVector2Vector2( vec2(1, 2), vec2(3, 4) )).toMatchObject({
        x : 1 * 3,
        y : 2 * 4,
    })
})
