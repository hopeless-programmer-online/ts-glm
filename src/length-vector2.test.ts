import { lengthVector2, vec2 } from './glm'

it('should accept Vector2', () => {
    expect( lengthVector2(vec2(3, 4)) ).toBe( (3**2 + 4**2)**(1/2) )
})
