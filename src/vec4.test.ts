import { vec4, Vector4 } from './glm'

it('should export default', () => {
    expect(vec4.default).toMatchObject(Vector4.default)
})
it('should accept nothing', () => {
    expect(vec4()).toMatchObject({
        x : Vector4.default.x,
        y : Vector4.default.y,
        z : Vector4.default.z,
        w : Vector4.default.w,
    })
})
it('should accept single scalar', () => {
    expect(vec4(5)).toMatchObject({
        x : 5,
        y : 5,
        z : 5,
        w : 5,
    })
})
it('should accept x, y, z, w', () => {
    expect(vec4(1, 2, 3, 4)).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should accept { x, y, z, w }', () => {
    expect(vec4({ x : 1, y : 2, z : 3, w : 4 })).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should accept { x }', () => {
    expect(vec4({ x : 1 })).toMatchObject({
        x : 1,
        y : vec4.default.y,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
it('should accept { y }', () => {
    expect(vec4({ y : 2 })).toMatchObject({
        x : vec4.default.x,
        y : 2,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
it('should accept { z }', () => {
    expect(vec4({ z : 3 })).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : 3,
        w : vec4.default.w,
    })
})
it('should accept { w }', () => {
    expect(vec4({ w : 4 })).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : vec4.default.z,
        w : 4,
    })
})
it('should accept {}', () => {
    expect(vec4({})).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
it('should accept { 0, 1, 2, 3 }', () => {
    expect(vec4({ 0 : 1, 1 : 2, 2 : 3, 3 : 4 })).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should accept { 0 }', () => {
    expect(vec4({ 0 : 1 })).toMatchObject({
        x : 1,
        y : vec4.default.y,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
it('should accept { 1 }', () => {
    expect(vec4({ 1 : 2 })).toMatchObject({
        x : vec4.default.x,
        y : 2,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
it('should accept { 2 }', () => {
    expect(vec4({ 2 : 3 })).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : 3,
        w : vec4.default.w,
    })
})
it('should accept { 3 }', () => {
    expect(vec4({ 3 : 4 })).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : vec4.default.z,
        w : 4,
    })
})
it('should accept [ number, number, number, number ]', () => {
    expect(vec4([ 1, 2, 3, 4 ])).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should accept []', () => {
    expect(vec4([])).toMatchObject({
        x : vec4.default.x,
        y : vec4.default.y,
        z : vec4.default.z,
        w : vec4.default.w,
    })
})
