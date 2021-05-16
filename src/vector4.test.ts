import { vec4, Vector4 } from './glm'

it('should export default values', () => {
    expect(Vector4.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
        w : 1,
    })
})
it('should implement index accessors', () => {
    const v = vec4(1, 2, 3, 4)

    expect(v).toMatchObject({ 0 : 1, 1 : 2, 2 : 3, 3 : 4 })

    v[0] = 5
    v[1] = 6
    v[2] = 7
    v[3] = 8

    expect(v).toMatchObject({ 0 : 5, 1 : 6, 2 : 7, 3 : 8 })
})
it('should implement set()', () => {
    const v = vec4(1, 2, 3, 4)

    v.set(5, 6, 7, 8)

    expect(v).toMatchObject({ x : 5, y : 6, z : 7, w : 8 })
})
it('should implement clone()', () => {
    expect(vec4(1, 2, 3, 4).clone()).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should implement toArray()', () => {
    expect(vec4(1, 2, 3, 4).toArray()).toMatchObject([ 1, 2, 3, 4 ])
})
it('should implement toString()', () => {
    expect(vec4(1, 2, 3, 4).toString()).toBe(`Vector4 { x : 1, y : 2, z : 3, w : 4 }`)
})
