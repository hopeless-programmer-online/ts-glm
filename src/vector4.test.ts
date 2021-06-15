import { vec4, Vector4 } from './glm'

it('should export default values', () => {
    expect(Vector4.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
        w : 1,
    })
})
it('should implement index accessors', () => {
    const v = vec4(1, 2, 3, 4)

    expect(v).toMatchObject({ 0 : 1, 1 : 2, 2 : 3, 3 : 4 })

    v[0] = 5
    v[1] = 6
    v[2] = 7
    v[3] = 8

    expect(v).toMatchObject({ 0 : 5, 1 : 6, 2 : 7, 3 : 8 })
})
it('should implement length accessor', () => {
    expect(vec4(5, 5, 5, 5)).toMatchObject({
        length : 10,
        len : 10,
        magnitude : 10,
        mag : 10,
        norm : 10,
    })
})
it('should implement square accessor', () => {
    expect(vec4(1, 2, 3, 4)).toMatchObject({
        square : 1**2 + 2**2 + 3**2 + 4**2,
        sqr    : 1**2 + 2**2 + 3**2 + 4**2,
    })
})
it('should implement set()', () => {
    const v = vec4(1, 2, 3, 4)

    v.set(5, 6, 7, 8)

    expect(v).toMatchObject({ x : 5, y : 6, z : 7, w : 8 })
})
it('should implement clone()', () => {
    expect(vec4(1, 2, 3, 4).clone()).toMatchObject({
        x : 1,
        y : 2,
        z : 3,
        w : 4,
    })
})
it('should implement add()', () => {
    expect(vec4(1, 2, 3, 4).add([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 + 5,
        y : 2 + 6,
        z : 3 + 7,
        w : 4 + 8,
    })
})
it('should implement subtract()', () => {
    expect(vec4(1, 2, 3, 4).subtract([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 - 5,
        y : 2 - 6,
        z : 3 - 7,
        w : 4 - 8,
    })
})
it('should implement sub()', () => {
    expect(vec4(1, 2, 3, 4).sub([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 - 5,
        y : 2 - 6,
        z : 3 - 7,
        w : 4 - 8,
    })
})
it('should implement multiply()', () => {
    expect(vec4(1, 2, 3, 4).multiply([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 * 5,
        y : 2 * 6,
        z : 3 * 7,
        w : 4 * 8,
    })
})
it('should implement mul()', () => {
    expect(vec4(1, 2, 3, 4).mul([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 * 5,
        y : 2 * 6,
        z : 3 * 7,
        w : 4 * 8,
    })
})
it('should implement divide()', () => {
    expect(vec4(1, 2, 3, 4).divide([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 / 5,
        y : 2 / 6,
        z : 3 / 7,
        w : 4 / 8,
    })
})
it('should implement div()', () => {
    expect(vec4(1, 2, 3, 4).div([ 5, 6, 7, 8 ])).toMatchObject({
        x : 1 / 5,
        y : 2 / 6,
        z : 3 / 7,
        w : 4 / 8,
    })
})
it('should implement toArray()', () => {
    expect(vec4(1, 2, 3, 4).toArray()).toMatchObject([ 1, 2, 3, 4 ])
})
it('should implement toString()', () => {
    expect(vec4(1, 2, 3, 4).toString()).toBe(`Vector4 { x : 1, y : 2, z : 3, w : 4 }`)
})
