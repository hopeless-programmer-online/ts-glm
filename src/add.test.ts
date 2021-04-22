import { add, vec2, vec3 } from './glm'

it('should be a function', () => {
    expect(typeof add).toBe('function')
})
it('should accept numbers', () => {
    expect(add(1, 2)).toBe(3)
})
it('should accept number and vec2', () => {
    expect(add(1, vec2(2, 3))).toMatchObject({ x : 1 + 2, y : 1 + 3 })
})
it('should accept vec2 and number', () => {
    expect(add(vec2(1, 2), 3)).toMatchObject({ x : 1 + 3, y : 2 + 3 })
})
it('should accept vec2 and vec2', () => {
    expect(add(vec2(1, 2), vec2(3, 4))).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should accept { x, y } and [ number, number ]', () => {
    expect(add({ x : 1, y : 2 }, [ 3, 4 ])).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should accept [ number, number ] and { x, y }', () => {
    expect(add([ 1, 2 ], { x : 3, y : 4 })).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should accept [ number, number ] and [ number, number ]', () => {
    expect(add([ 1, 2 ], [ 3, 4 ])).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should accept number and vec3', () => {
    expect(add(1, vec3(2, 3, 4))).toMatchObject({ x : 1 + 2, y : 1 + 3, z : 1 + 4 })
})
it('should accept number and { x, y, z }', () => {
    expect(add(1, { x : 2, y : 3, z : 4 })).toMatchObject({ x : 1 + 2, y : 1 + 3, z : 1 + 4 })
})
it('should accept number and [ number, number, number ]', () => {
    expect(add(1, [ 2, 3, 4 ])).toMatchObject({ x : 1 + 2, y : 1 + 3, z : 1 + 4 })
})
it('should accept vec3 and number', () => {
    expect(add(vec3(1, 2, 3), 4)).toMatchObject({ x : 1 + 4, y : 2 + 4, z : 3 + 4 })
})
it('should accept vec3 and vec3', () => {
    expect(add(vec3(1, 2, 3), vec3(4, 5, 6))).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
it('should accept { x, y } and [ number, number ]', () => {
    expect(add({ x : 1, y : 2, z : 3 }, [ 4, 5, 6 ])).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
it('should accept [ number, number, number ] and { x, y, z }', () => {
    expect(add([ 1, 2, 3 ], { x : 4, y : 5, z : 6 })).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
it('should accept [ number, number, number ] and [ number, number, number ]', () => {
    expect(add([ 1, 2, 3 ], [ 4, 5, 6 ])).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
