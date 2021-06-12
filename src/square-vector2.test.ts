import { squareVector2 as sqr, vec2 } from './glm'

it('should square vec2', () => {
    expect(sqr(vec2(1, 2))).toBe(1**2 + 2**2)
})
