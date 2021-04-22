import { vec2, vec3 } from './glm'

it('should be a function', () => {
    expect(typeof vec3).toBe('function')
})
it('should accept zero arguments', () => {
    expect(vec3()).toMatchObject({ x : 0, y : 0, z : 0 })
})
it('should accept single scalar', () => {
    expect(vec3(1)).toMatchObject({ x : 1, y : 1, z : 1 })
})
it('should accept { x | r | 0, y | g | 1, z | b | 2 } | [ number, number, number ]', () => {
    expect(vec3({ x : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ r : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ 0 : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3({ x : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ x : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ x : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ r : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ r : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ r : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ 0 : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ 0 : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ 0 : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3({ x : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ x : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ x : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ r : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ r : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ r : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ 0 : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ 0 : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ 0 : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
    expect(vec3({ y : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ y : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ y : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ g : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ g : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ g : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ 1 : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ 1 : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ 1 : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
    expect(vec3({ x : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
    expect(vec3({ r : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
    expect(vec3({ 0 : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
    expect(vec3({ y : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
    expect(vec3({ g : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
    expect(vec3({ 1 : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
    expect(vec3({ z : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
    expect(vec3({ b : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
    expect(vec3({ 2 : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
    expect(vec3([ 1, 2, 3 ])).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(vec3([ 1, 2 ])).toMatchObject({ x : 1, y : 2, z : 0 })
    expect(vec3([ 1 ])).toMatchObject({ x : 1, y : 0, z : 0 })
})
it('should accept vec2 and number', () => {
    expect(vec3(vec2(1, 2), 3)).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should accept number, vec2', () => {
    expect(vec3(1, vec2(2, 3))).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should accept number and number', () => {
    expect(vec3(1, 2)).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should accept number, number, number', () => {
    expect(vec3(1, 2, 3)).toMatchObject({ x : 1, y : 2, z : 3 })
})
