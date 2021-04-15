import * as glm from './glm'

it('should match expected interface', () => {
    expect(typeof glm).toBe('object')
    expect(glm).toHaveProperty('Vector2Abstraction')
    expect(glm).toHaveProperty('Vector2')
    expect(glm).toHaveProperty('Matrix2')
    expect(glm).toHaveProperty('vec2')
    expect(glm).toHaveProperty('add')
    expect(glm).toHaveProperty('dot')
})
