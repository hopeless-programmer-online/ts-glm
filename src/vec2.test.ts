import { vec2 } from './glm'

it('should be a function', () => {
    expect(typeof vec2).toBe('function')
})
it('should accept single scalar', () => {
    expect(vec2(5)).toMatchObject({ x : 5, y : 5 })
})
it('should accept { x | r | 0, y | g | 1 } | number[]', () => {
    expect(vec2({ x : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ x : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ x : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ r : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ r : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ r : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ 0 : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ 0 : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2({ 0 : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
    expect(vec2([ 1, 2 ])).toMatchObject({ x : 1, y : 2 })
})
it('should accept x and y', () => {
    expect(vec2(1, 2)).toMatchObject({ x : 1, y : 2 })
})
