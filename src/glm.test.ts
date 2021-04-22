import * as glm from './glm'

it('should match expected interface', () => {
    expect(typeof glm).toBe('object')
    expect(glm).toHaveProperty('Vector2Abstraction')
    expect(glm).toHaveProperty('Vector2')
    expect(glm).toHaveProperty('Vector3')
    expect(glm).toHaveProperty('Matrix2')
    expect(glm).toHaveProperty('deduceVector2')
    expect(glm).toHaveProperty('vec2')
    expect(glm).toHaveProperty('deduceVector3')
    expect(glm).toHaveProperty('mat2')
    expect(glm).toHaveProperty('add')
    expect(glm).toHaveProperty('dot')
    expect(glm).toHaveProperty('multiplyVector2Vector2')
    expect(glm).toHaveProperty('multiplyMatrix2Matrix2')
    expect(glm).toHaveProperty('multiplyMatrix2Vector2')
    expect(glm).toHaveProperty('multiply')
    expect(glm).toHaveProperty('mul')
    expect(glm).toHaveProperty('determinant')
    expect(glm).toHaveProperty('det')
    expect(glm).toHaveProperty('adjugate')
    expect(glm).toHaveProperty('adj')
    expect(glm).toHaveProperty('inverse')
    expect(glm).toHaveProperty('inv')
})
