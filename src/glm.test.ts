import * as glm from './glm'

it('should match expected interface', () => {
    expect(typeof glm).toBe('object')
    expect(glm).toHaveProperty('Vector2')
})
