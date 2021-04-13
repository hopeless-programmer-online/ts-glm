import { Vector2 } from './glm'

it('should be a class', () => {
    expect(typeof Vector2).toBe('function')
})
it('should implement constructor without arguments', () => {
    const a = new Vector2

    expect(a.x).toBe(0)
    expect(a.y).toBe(0)
})
it('should implement constructor with x argument', () => {
    const a = new Vector2({ x : 5 })

    expect(a.x).toBe(5)
    expect(a.y).toBe(0)
})
it('should implement constructor with y argument', () => {
    const a = new Vector2({ y : 5 })

    expect(a.x).toBe(0)
    expect(a.y).toBe(5)
})
it('should implement x getter/setter', () => {
    const a = new Vector2

    a.x = 5

    expect(a.x).toBe(5)
})
it('should implement y getter/setter', () => {
    const a = new Vector2

    a.y = 5

    expect(a.y).toBe(5)
})
it('should implement toString()', () => {
    const a = new Vector2({ x : 1, y : 2 })

    expect(`${a}`).toBe(`Vector2 { x : 1, y : 2 }`)
})
