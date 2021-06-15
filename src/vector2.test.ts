import { vec2, Vector2 } from './glm'

it('should export default values', () => {
    expect(Vector2.default).toMatchObject({
        x : 0,
        y : 0,
    })
})
it('should implement index accessors', () => {
    const v = vec2(1, 2)

    expect(v).toMatchObject({ 0 : 1, 1 : 2 })

    v[0] = 3
    v[1] = 4

    expect(v).toMatchObject({ 0 : 3, 1 : 4 })
})
it('should implement length accessor', () => {
    expect(vec2(3, 4)).toMatchObject({
        length : 5,
        len : 5,
        magnitude : 5,
        mag : 5,
        norm : 5,
    })
})
it('should implement square accessor', () => {
    expect(vec2(1, 2)).toMatchObject({
        square : 1**2 + 2**2,
        sqr    : 1**2 + 2**2,
    })
})
it('should implement neg accessor', () => {
    expect(vec2(1, 2)).toMatchObject({
        negate : { x : -1, y : -2 },
        neg    : { x : -1, y : -2 },
    })
})
it('should implement set()', () => {
    const v = vec2(1, 2)

    v.set(3, 4)

    expect(v).toMatchObject({ x : 3, y : 4 })
})
it('should implement clone()', () => {
    expect(vec2(1, 2).clone()).toMatchObject({
        x : 1,
        y : 2,
    })
})
it('should implement add()', () => {
    expect(vec2(1, 2).add([ 3, 4 ])).toMatchObject({
        x : 1 + 3,
        y : 2 + 4,
    })
})
it('should implement subtract()', () => {
    expect(vec2(1, 2).subtract([ 3, 4 ])).toMatchObject({
        x : 1 - 3,
        y : 2 - 4,
    })
})
it('should implement sub()', () => {
    expect(vec2(1, 2).sub([ 3, 4 ])).toMatchObject({
        x : 1 - 3,
        y : 2 - 4,
    })
})
it('should implement multiply()', () => {
    expect(vec2(1, 2).multiply([ 3, 4 ])).toMatchObject({
        x : 1 * 3,
        y : 2 * 4,
    })
})
it('should implement mul()', () => {
    expect(vec2(1, 2).mul([ 3, 4 ])).toMatchObject({
        x : 1 * 3,
        y : 2 * 4,
    })
})
it('should implement divide()', () => {
    expect(vec2(1, 2).divide([ 3, 4 ])).toMatchObject({
        x : 1 / 3,
        y : 2 / 4,
    })
})
it('should implement div()', () => {
    expect(vec2(1, 2).div([ 3, 4 ])).toMatchObject({
        x : 1 / 3,
        y : 2 / 4,
    })
})
it('should implement toArray()', () => {
    expect(vec2(1, 2).toArray()).toMatchObject([ 1, 2 ])
})
it('should implement toString()', () => {
    expect(vec2(1, 2).toString()).toBe(`Vector2 { x : 1, y : 2 }`)
})
