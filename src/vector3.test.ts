import { vec3, Vector3 } from './glm'

it('should export default values', () => {
    expect(Vector3.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
    })
})
it('should implement index accessors', () => {
    const v = vec3(1, 2, 3)

    expect(v).toMatchObject({ 0 : 1, 1 : 2, 2 : 3 })

    v[0] = 4
    v[1] = 5
    v[2] = 6

    expect(v).toMatchObject({ 0 : 4, 1 : 5, 2 : 6 })
})
it('should implement length accessor', () => {
    expect(vec3(2, 3, 6)).toMatchObject({
        length : 7,
        len : 7,
        magnitude : 7,
        mag : 7,
        norm : 7,
    })
})
it('should implement square accessor', () => {
    expect(vec3(1, 2, 3)).toMatchObject({
        square : 1**2 + 2**2 + 3**2,
        sqr    : 1**2 + 2**2 + 3**2,
    })
})
it('should implement neg accessor', () => {
    expect(vec3(1, 2, 3)).toMatchObject({
        negate : { x : -1, y : -2, z : -3 },
        neg    : { x : -1, y : -2, z : -3 },
    })
})
it('should implement set()', () => {
    const v = vec3(1, 2, 3)

    v.set(4, 5, 6)

    expect(v).toMatchObject({ x : 4, y : 5, z : 6 })
})
it('should implement clone()', () => {
    expect(vec3(1, 2, 3).clone()).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
    })
})
it('should implement add()', () => {
    expect(vec3(1, 2, 3).add([ 4, 5, 6 ])).toMatchObject({
        x : 1 + 4,
        y : 2 + 5,
        z : 3 + 6,
    })
})
it('should implement subtract()', () => {
    expect(vec3(1, 2, 3).subtract([ 4, 5, 6 ])).toMatchObject({
        x : 1 - 4,
        y : 2 - 5,
        z : 3 - 6,
    })
})
it('should implement sub()', () => {
    expect(vec3(1, 2, 3).sub([ 4, 5, 6 ])).toMatchObject({
        x : 1 - 4,
        y : 2 - 5,
        z : 3 - 6,
    })
})
it('should implement multiply()', () => {
    expect(vec3(1, 2, 3).multiply([ 4, 5, 6 ])).toMatchObject({
        x : 1 * 4,
        y : 2 * 5,
        z : 3 * 6,
    })
})
it('should implement mul()', () => {
    expect(vec3(1, 2, 3).mul([ 4, 5, 6 ])).toMatchObject({
        x : 1 * 4,
        y : 2 * 5,
        z : 3 * 6,
    })
})
it('should implement divide()', () => {
    expect(vec3(1, 2, 3).divide([ 4, 5, 6 ])).toMatchObject({
        x : 1 / 4,
        y : 2 / 5,
        z : 3 / 6,
    })
})
it('should implement div()', () => {
    expect(vec3(1, 2, 3).div([ 4, 5, 6 ])).toMatchObject({
        x : 1 / 4,
        y : 2 / 5,
        z : 3 / 6,
    })
})
it('should implement dot()', () => {
    expect(vec3(1, 2, 3).dot([ 4, 5, 6 ])).toBe(1 * 4 + 2 * 5 + 3 * 6)
})
it('should implement toArray()', () => {
    expect(vec3(1, 2, 3).toArray()).toMatchObject([ 1, 2, 3 ])
})
it('should implement toString()', () => {
    expect(vec3(1, 2, 3).toString()).toBe(`Vector3 { x : 1, y : 2, z : 3 }`)
})
