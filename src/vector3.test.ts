import { Vector3 } from './glm'

it('should be a class', () => {
    expect(typeof Vector3).toBe('function')
})
it('should provide appropriate interface', () => {
    expect(Vector3.prototype).toHaveProperty('x')
    expect(Vector3.prototype).toHaveProperty('r')
    expect(Vector3.prototype).toHaveProperty('0')
    expect(Vector3.prototype).toHaveProperty('y')
    expect(Vector3.prototype).toHaveProperty('g')
    expect(Vector3.prototype).toHaveProperty('1')
    expect(Vector3.prototype).toHaveProperty('z')
    expect(Vector3.prototype).toHaveProperty('b')
    expect(Vector3.prototype).toHaveProperty('2')
    expect(Vector3.prototype).toHaveProperty('toString')
})
it('should implement constructor without arguments', () => {
    const a = new Vector3

    expect(a).toMatchObject({
        x : 0, y : 0, z : 0,
        r : 0, g : 0, b : 0,
        0 : 0, 1 : 0, 2 : 0,
    })
})
it('should implement constructor with x argument', () => {
    const a = new Vector3({ x : 5 })

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
        r : 5, g : 0, b : 0,
        0 : 5, 1 : 0, 2 : 0,
    })
})
it('should implement constructor with y argument', () => {
    const a = new Vector3({ y : 5 })

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
        r : 0, g : 5, b : 0,
        0 : 0, 1 : 5, 2 : 0,
    })
})
it('should implement constructor with z argument', () => {
    const a = new Vector3({ z : 5 })

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
        r : 0, g : 0, b : 5,
        0 : 0, 1 : 0, 2 : 5,
    })
})
it('should implement x getter/setter', () => {
    const a = new Vector3

    a.x = 5

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
        r : 5, g : 0, b : 0,
        0 : 5, 1 : 0, 2 : 0,
    })
})
it('should implement r getter/setter', () => {
    const a = new Vector3

    a.r = 5

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
        r : 5, g : 0, b : 0,
        0 : 5, 1 : 0, 2 : 0,
    })
})
it('should implement 0 getter/setter', () => {
    const a = new Vector3

    a[0] = 5

    expect(a).toMatchObject({
        x : 5, y : 0, z : 0,
        r : 5, g : 0, b : 0,
        0 : 5, 1 : 0, 2 : 0,
    })
})
it('should implement y getter/setter', () => {
    const a = new Vector3

    a.y = 5

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
        r : 0, g : 5, b : 0,
        0 : 0, 1 : 5, 2 : 0,
    })
})
it('should implement g getter/setter', () => {
    const a = new Vector3

    a.g = 5

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
        r : 0, g : 5, b : 0,
        0 : 0, 1 : 5, 2 : 0,
    })
})
it('should implement 1 getter/setter', () => {
    const a = new Vector3

    a[1] = 5

    expect(a).toMatchObject({
        x : 0, y : 5, z : 0,
        r : 0, g : 5, b : 0,
        0 : 0, 1 : 5, 2 : 0,
    })
})
it('should implement z getter/setter', () => {
    const a = new Vector3

    a.z = 5

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
        r : 0, g : 0, b : 5,
        0 : 0, 1 : 0, 2 : 5,
    })
})
it('should implement b getter/setter', () => {
    const a = new Vector3

    a.b = 5

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
        r : 0, g : 0, b : 5,
        0 : 0, 1 : 0, 2 : 5,
    })
})
it('should implement 2 getter/setter', () => {
    const a = new Vector3

    a[2] = 5

    expect(a).toMatchObject({
        x : 0, y : 0, z : 5,
        r : 0, g : 0, b : 5,
        0 : 0, 1 : 0, 2 : 5,
    })
})
it('should implement toString()', () => {
    const a = new Vector3({ x : 1, y : 2, z : 3 })

    expect(`${a}`).toBe(`Vector3 { x : 1, y : 2, z : 3 }`)
})
