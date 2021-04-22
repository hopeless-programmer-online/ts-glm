import { deduceVector2, vec2 } from './glm'

it('should be function', () => {
    expect(typeof deduceVector2).toBe('function')
})
it('should deduce from { x, y }', () => {
    expect(deduceVector2({ x : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { x, g }', () => {
    expect(deduceVector2({ x : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { x, 1 }', () => {
    expect(deduceVector2({ x : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { r, y }', () => {
    expect(deduceVector2({ r : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { r, g }', () => {
    expect(deduceVector2({ r : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { r, 1 }', () => {
    expect(deduceVector2({ r : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { 0, y }', () => {
    expect(deduceVector2({ 0 : 1, y : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { 0, g }', () => {
    expect(deduceVector2({ 0 : 1, g : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { 0, 1 }', () => {
    expect(deduceVector2({ 0 : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from [ number, number ]', () => {
    expect(deduceVector2([ 1, 2 ])).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from vec2()', () => {
    expect(deduceVector2(vec2(1, 2))).toMatchObject({ x : 1, y : 2 })
})
it('should deduce from { x }', () => {
    expect(deduceVector2({ x : 1 })).toMatchObject({ x : 1, y : 0 })
})
it('should deduce from { r }', () => {
    expect(deduceVector2({ r : 1 })).toMatchObject({ x : 1, y : 0 })
})
it('should deduce from { 0 }', () => {
    expect(deduceVector2({ 0 : 1 })).toMatchObject({ x : 1, y : 0 })
})
it('should deduce from { y }', () => {
    expect(deduceVector2({ y : 1 })).toMatchObject({ x : 0, y : 1 })
})
it('should deduce from { g }', () => {
    expect(deduceVector2({ g : 1 })).toMatchObject({ x : 0, y : 1 })
})
it('should deduce from { 1 }', () => {
    expect(deduceVector2({ 1 : 1 })).toMatchObject({ x : 0, y : 1 })
})
it('should deduce from {}', () => {
    expect(deduceVector2({})).toMatchObject({ x : 0, y : 0 })
})
