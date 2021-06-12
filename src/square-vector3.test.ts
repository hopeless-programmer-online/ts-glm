import { squareVector3 as sqr, vec3 } from './glm'

it('should square vec3', () => {
    expect(sqr(vec3(1, 2, 3))).toBe(1**2 + 2**2 + 3**2)
})
