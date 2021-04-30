import { vec2, Vector2 } from './glm'

it('should export default values', () => {
    expect(Vector2.default).toMatchObject({
        x : 0,
        y : 0,
    })
})
it('should implement toArray()', () => {
    expect(vec2(1, 2).toArray()).toMatchObject([ 1, 2 ])
})
it('should implement toString()', () => {
    expect(vec2(1, 2).toString()).toBe(`Vector2 { x : 1, y : 2 }`)
})
