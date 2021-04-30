import { vec3, Vector3 } from './glm'

it('should export default values', () => {
    expect(Vector3.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
    })
})
it('should implement toString()', () => {
    expect(vec3(1, 2, 3).toString()).toBe(`Vector3 { x : 1, y : 2, z : 3 }`)
})
