import { vec4, Vector4 } from './glm'

it('should export default values', () => {
    expect(Vector4.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
        w : 1,
    })
})
it('should implement toArray()', () => {
    expect(vec4(1, 2, 3, 4).toArray()).toMatchObject([ 1, 2, 3, 4 ])
})
it('should implement toString()', () => {
    expect(vec4(1, 2, 3, 4).toString()).toBe(`Vector4 { x : 1, y : 2, z : 3, w : 4 }`)
})
