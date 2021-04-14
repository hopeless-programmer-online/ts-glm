import { vec2, Vector2 } from './glm'

it('should be a class', () => {
    expect(typeof Vector2).toBe('function')
})
it('should implement constructor without arguments', () => {
    const a = new Vector2

    expect(a).toMatchObject({
        x : 0, y : 0,
        r : 0, g : 0,
        0 : 0, 1 : 0,
    })
})
it('should implement constructor with x argument', () => {
    const a = new Vector2({ x : 5 })

    expect(a).toMatchObject({
        x : 5, y : 0,
        r : 5, g : 0,
        0 : 5, 1 : 0,
    })
})
it('should implement constructor with y argument', () => {
    const a = new Vector2({ y : 5 })

    expect(a).toMatchObject({
        x : 0, y : 5,
        r : 0, g : 5,
        0 : 0, 1 : 5,
    })
})
it('should implement x getter/setter', () => {
    const a = new Vector2

    a.x = 5

    expect(a).toMatchObject({
        x : 5, y : 0,
        r : 5, g : 0,
        0 : 5, 1 : 0,
    })
})
it('should implement r getter/setter', () => {
    const a = new Vector2

    a.r = 5

    expect(a).toMatchObject({
        x : 5, y : 0,
        r : 5, g : 0,
        0 : 5, 1 : 0,
    })
})
it('should implement 0 getter/setter', () => {
    const a = new Vector2

    a[0] = 5

    expect(a).toMatchObject({
        x : 5, y : 0,
        r : 5, g : 0,
        0 : 5, 1 : 0,
    })
})
it('should implement y getter/setter', () => {
    const a = new Vector2

    a.y = 5

    expect(a).toMatchObject({
        x : 0, y : 5,
        r : 0, g : 5,
        0 : 0, 1 : 5,
    })
})
it('should implement g getter/setter', () => {
    const a = new Vector2

    a.g = 5

    expect(a).toMatchObject({
        x : 0, y : 5,
        r : 0, g : 5,
        0 : 0, 1 : 5,
    })
})
it('should implement 1 getter/setter', () => {
    const a = new Vector2

    a[1] = 5

    expect(a).toMatchObject({
        x : 0, y : 5,
        r : 0, g : 5,
        0 : 0, 1 : 5,
    })
})
it('should implement dot()', () => {
    expect(vec2(1, 2).dot(vec2(3, 4))).toBe(11)
})
it('should implement toString()', () => {
    const a = new Vector2({ x : 1, y : 2 })

    expect(`${a}`).toBe(`Vector2 { x : 1, y : 2 }`)
})
