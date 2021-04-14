import { vec2, Vector2 } from './glm'

it('should be a class', () => {
    expect(typeof Vector2).toBe('function')
})
it('should provide appropriate interface', () => {
    expect(Vector2).toHaveProperty('from')
    expect(Vector2.prototype).toHaveProperty('x')
    expect(Vector2.prototype).toHaveProperty('r')
    expect(Vector2.prototype).toHaveProperty('0')
    expect(Vector2.prototype).toHaveProperty('y')
    expect(Vector2.prototype).toHaveProperty('g')
    expect(Vector2.prototype).toHaveProperty('1')
    expect(Vector2.prototype).toHaveProperty('dot')
    expect(Vector2.prototype).toHaveProperty('toString')
})
it('should implement from(number)', () => {
    expect(Vector2.from(1)).toMatchObject({ x : 1, y : 1 })
})
it('should implement from({ x | r | 0, y | g | 1 } | number[])', () => {
    expect(Vector2.from({ x : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ x : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ x : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ r : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ r : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ r : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ 0 : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ 0 : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from({ 0 : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from([ 1, 2 ])).toMatchObject({ x : 1, y : 2 })
    expect(Vector2.from(vec2(1, 2))).toMatchObject({ x : 1, y : 2 })
})
it('should implement from(number, number)', () => {
    expect(Vector2.from(1, 2)).toMatchObject({ x : 1, y : 2 })
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
it('should implement clone()', () => {
    const a = vec2(1, 2)
    const b = a.clone()

    b.x = 5
    b.y = 10

    expect(a).toMatchObject({ x : 1, y : 2 })
})
it('should implement dot()', () => {
    expect(vec2(1, 2).dot(vec2(3, 4))).toBe(11)
})
it('should implement toString()', () => {
    const a = new Vector2({ x : 1, y : 2 })

    expect(`${a}`).toBe(`Vector2 { x : 1, y : 2 }`)
})
