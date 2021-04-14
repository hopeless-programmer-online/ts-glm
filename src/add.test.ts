import { add, vec2 } from './glm'

it('should be a function', () => {
    expect(typeof add).toBe('function')
})
it('should accept numbers', () => {
    expect(add(1, 2)).toBe(3)
})
it('should accept number and vec2', () => {
    expect(add(1, vec2(2, 3))).toMatchObject({ x : 3, y : 4 })
})
it('should accept vec2 and number', () => {
    expect(add(vec2(1, 2), 3)).toMatchObject({ x : 4, y : 5 })
})
it('should accept vec2 and vec2', () => {
    expect(add(vec2(1, 2), vec2(3, 4))).toMatchObject({ x : 4, y : 6 })
})
