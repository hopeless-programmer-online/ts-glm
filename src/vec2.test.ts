import { vec2, Vector2 } from './glm'

it('should export default', () => {
    expect(vec2.default).toMatchObject(Vector2.default)
})
it('should accept nothing', () => {
    expect(vec2()).toMatchObject({
        x : Vector2.default.x,
        y : Vector2.default.y,
    })
})
it('should accept single scalar', () => {
    expect(vec2(5)).toMatchObject({
        x : 5,
        y : 5,
    })
})
it('should accept x and y', () => {
    expect(vec2(1, 2)).toMatchObject({
        x : 1,
        y : 2,
    })
})
it('should accept { x }', () => {
    expect(vec2({ x : 1 })).toMatchObject({
        x : 1,
        y : Vector2.default.y,
    })
})
it('should accept { y }', () => {
    expect(vec2({ y : 1 })).toMatchObject({
        x : Vector2.default.x,
        y : 1,
    })
})
it('should accept { x, y }', () => {
    expect(vec2({ x : 1, y : 2 })).toMatchObject({
        x : 1,
        y : 2,
    })
})
it('should accept {}', () => {
    expect(vec2({})).toMatchObject({
        x : Vector2.default.x,
        y : Vector2.default.y,
    })
})
it('should accept { 0 }', () => {
    expect(vec2({ 0 : 1 })).toMatchObject({
        x : 1,
        y : Vector2.default.y,
    })
})
it('should accept { 1 }', () => {
    expect(vec2({ 1 : 1 })).toMatchObject({
        x : Vector2.default.x,
        y : 1,
    })
})
it('should accept [ number, number ]', () => {
    expect(vec2([ 1, 2 ])).toMatchObject({
        x : 1,
        y : 2,
    })
})
it('should accept []', () => {
    expect(vec2([])).toMatchObject({
        x : Vector2.default.x,
        y : Vector2.default.y,
    })
})
