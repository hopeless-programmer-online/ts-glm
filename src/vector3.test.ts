import { Vector3 } from './glm'

it('should be a class', () => {
    expect(typeof Vector3).toBe('function')
})
it('should provide appropriate interface', () => {
    expect(Vector3.prototype).toHaveProperty('x')
    expect(Vector3.prototype).toHaveProperty('y')
})
it('should implement constructor without arguments', () => {
    const a = new Vector3

    expect(a).toMatchObject({
        x : 0, y : 0, z : 0,
    })
})
it('should implement constructor with x argument', () => {
    const a = new Vector3({ x : 5 })

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
    })
})
it('should implement constructor with y argument', () => {
    const a = new Vector3({ y : 5 })

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
    })
})
it('should implement constructor with z argument', () => {
    const a = new Vector3({ z : 5 })

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
    })
})
it('should implement x getter/setter', () => {
    const a = new Vector3

    a.x = 5

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
    })
})
it('should implement y getter/setter', () => {
    const a = new Vector3

    a.y = 5

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
    })
})
it('should implement z getter/setter', () => {
    const a = new Vector3

    a.z = 5

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
    })
})
