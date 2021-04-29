import { ArrayVector2, Vector2 } from './glm'

it('should export default values', () => {
    expect(ArrayVector2.default).toMatchObject({
        values : [ Vector2.default.x, Vector2.default.y ],
        offset : 0,
        stride : 1,
    })
})
it('should has constructor()', () => {
    const v = new ArrayVector2

    expect(v.x).toBe(Vector2.default.x)
    expect(v.y).toBe(Vector2.default.y)
})
it('should has constructor({})', () => {
    const v = new ArrayVector2({})

    expect(v.x).toBe(Vector2.default.x)
    expect(v.y).toBe(Vector2.default.y)
})
it('should has constructor({ values })', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
})
it('should has constructor({ values, offset })', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, offset : 0 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
})
it('should has constructor({ values, stride })', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, stride : 1 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
})
it('should has constructor({ values, offset, stride })', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, offset : 0, stride : 1 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
})
it('should has x setter', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, offset : 0, stride : 1 })

    v.x = 5

    expect(v.x).toBe(5)
    expect(values).toMatchObject([ 5, 2 ])
})
it('should has y setter', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, offset : 0, stride : 1 })

    v.y = 5

    expect(v.y).toBe(5)
    expect(values).toMatchObject([ 1, 5 ])
})
it('vectors created with default constructor should refer to different values', () => {
    const a = new ArrayVector2
    const b = new ArrayVector2

    a.x = 1
    a.y = 2

    expect(a).toMatchObject({ x : 1, y : 2 })
    expect(b).toMatchObject({ x : 0, y : 0 })
})