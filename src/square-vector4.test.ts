import { squareVector4 as sqr, vec4 } from './glm'

it('should square vec4', () => {
    expect(sqr(vec4(1, 2, 3, 4))).toBe(1**2 + 2**2 + 3**2 + 4**2)
})
