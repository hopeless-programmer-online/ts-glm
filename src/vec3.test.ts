import { vec3, Vector3 } from './glm'

it('should export default', () => {
    expect(vec3.default).toMatchObject(Vector3.default)
})
it('should accept nothing', () => {
    expect(vec3()).toMatchObject({
        x : Vector3.default.x,
        y : Vector3.default.y,
        z : Vector3.default.z,
    })
})
it('should accept single scalar', () => {
    expect(vec3(5)).toMatchObject({
        x : 5,
        y : 5,
        z : 5,
    })
})
it('should accept x, y, z', () => {
    expect(vec3(1, 2, 3)).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
    })
})
it('should accept { x, y, z }', () => {
    expect(vec3({ x : 1, y : 2, z : 3 })).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
    })
})
it('should accept { x }', () => {
    expect(vec3({ x : 1 })).toMatchObject({
        x : 1,
        y : vec3.default.y,
        z : vec3.default.z,
    })
})
it('should accept { y }', () => {
    expect(vec3({ y : 2 })).toMatchObject({
        x : vec3.default.x,
        y : 2,
        z : vec3.default.z,
    })
})
it('should accept { z }', () => {
    expect(vec3({ z : 3 })).toMatchObject({
        x : vec3.default.x,
        y : vec3.default.y,
        z : 3,
    })
})
it('should accept {}', () => {
    expect(vec3({})).toMatchObject({
        x : vec3.default.x,
        y : vec3.default.y,
        z : vec3.default.z,
    })
})
it('should accept { 0, 1, 2 }', () => {
    expect(vec3({ 0 : 1, 1 : 2, 2 : 3 })).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
    })
})
it('should accept { 0 }', () => {
    expect(vec3({ 0 : 1 })).toMatchObject({
        x : 1,
        y : vec3.default.y,
        z : vec3.default.z,
    })
})
it('should accept { 1 }', () => {
    expect(vec3({ 1 : 2 })).toMatchObject({
        x : vec3.default.x,
        y : 2,
        z : vec3.default.z,
    })
})
it('should accept { 2 }', () => {
    expect(vec3({ 2 : 3 })).toMatchObject({
        x : vec3.default.x,
        y : vec3.default.y,
        z : 3,
    })
})
it('should accept [ number, number, number ]', () => {
    expect(vec3([ 1, 2, 3 ])).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
    })
})
it('should accept []', () => {
    expect(vec3([])).toMatchObject({
        x : vec3.default.x,
        y : vec3.default.y,
        z : vec3.default.z,
    })
})
