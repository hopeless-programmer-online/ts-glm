import * as glm from './glm'
import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'
import NumberVector2 from './number-vector2'
import NumberVector3 from './number-vector3'

it('should be object', () => {
    expect(typeof glm).toBe('object')
})
it('should export Vector2', () => {
    expect(glm).toHaveProperty('Vector2', Vector2)
})
it('should export Vector3', () => {
    expect(glm).toHaveProperty('Vector3', Vector3)
})
it('should export Vector4', () => {
    expect(glm).toHaveProperty('Vector4', Vector4)
})
it('should export NumberVector2', () => {
    expect(glm).toHaveProperty('NumberVector2', NumberVector2)
})
it('should export NumberVector3', () => {
    expect(glm).toHaveProperty('NumberVector3', NumberVector3)
})
