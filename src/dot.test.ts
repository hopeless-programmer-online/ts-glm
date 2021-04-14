import { dot, vec2, Vector2 } from './glm'

it('should be a function', () => {
    expect(typeof dot).toBe('function')
})
it('should accept numbers', () => {
    expect(dot(2, 3)).toBe(6)
})
it('should accept vec2', () => {
    expect(dot(vec2(1, 2), vec2(3, 4))).toBe(11)
})
it('should accept xy', () => {
    expect(dot({ x : 1, y : 2 }, { x : 3, y : 4 })).toBe(11)
})
it('should throw on passing inconsistent arguments', () => {
    expect(() => (dot as unknown as ((a : number, b : Vector2) => number))(0, vec2(0, 0))).toThrowError()
    expect(() => (dot as unknown as ((a : Vector2, b : number) => number))(vec2(0, 0), 0)).toThrowError()
})
