import { dotVector2Vector2 as dot, vec2 } from './glm'

it('should add Vector2 and Vector2', () => {
    expect(dot( vec2(1, 2), vec2(3, 4) )).toBe(1 * 3 + 2 * 4)
})
