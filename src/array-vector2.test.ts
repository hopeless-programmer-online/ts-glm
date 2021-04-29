import { ArrayVector2 } from './glm'

it('should export default values', () => {
    expect(ArrayVector2.default).toMatchObject({
        offset : 0,
        stride : 1,
    })
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
