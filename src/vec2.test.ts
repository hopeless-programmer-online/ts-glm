import { vec2, Vector2 } from './glm'

it('should accept x and y', () => {
    expect(vec2(1, 2)).toMatchObject<Vector2>({
        x : 1,
        y : 2,
    })
})
