import * as glm from './glm'
import Vector2 from './vector2'
import Vector3 from './vector3'

it('should be object', () => {
    expect(typeof glm).toBe('object')
})
it('should export Vector2', () => {
    expect(glm).toHaveProperty('Vector2', Vector2)
})
it('should export Vector3', () => {
    expect(glm).toHaveProperty('Vector3', Vector3)
})
