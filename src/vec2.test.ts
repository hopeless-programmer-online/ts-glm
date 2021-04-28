import { vec2, Vector2 } from './glm'

it('should accept nothing', () => {
    expect(vec2()).toMatchObject<Vector2>({
        x : Vector2.default.x,
        y : Vector2.default.y,
    })
})
it('should accept x and y', () => {
    expect(vec2(1, 2)).toMatchObject<Vector2>({
        x : 1,
        y : 2,
    })
})
