import { ArrayVector4, Vector4 } from './glm'

it('should export default values', () => {
    expect(ArrayVector4.default).toMatchObject({
        values : [ Vector4.default.x, Vector4.default.y, Vector4.default.z, Vector4.default.w ],
        offset : 0,
        stride : 1,
    })
})
it('should has constructor()', () => {
    const v = new ArrayVector4

    expect(v).toMatchObject({ x : Vector4.default.x, y : Vector4.default.y, z : Vector4.default.z, w : Vector4.default.w })
})
it('should has constructor({})', () => {
    const v = new ArrayVector4({})

    expect(v).toMatchObject({ x : Vector4.default.x, y : Vector4.default.y, z : Vector4.default.z, w : Vector4.default.w })
})
it('should has constructor({ values })', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3, w : 4 })
})
it('should has constructor({ values, offset })', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3, w : 4 })
})
it('should has constructor({ values, stride })', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, stride : 1 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3, w : 4 })
})
it('should has constructor({ values, offset, stride })', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0, stride : 1 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3, w : 4 })
})
it('should has x setter', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0, stride : 1 })

    v.x = 5

    expect(v.x).toBe(5)
    expect(values).toMatchObject([ 5, 2, 3, 4 ])
})
it('should has y setter', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0, stride : 1 })

    v.y = 5

    expect(v.y).toBe(5)
    expect(values).toMatchObject([ 1, 5, 3, 4 ])
})
it('should has z setter', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0, stride : 1 })

    v.z = 5

    expect(v.z).toBe(5)
    expect(values).toMatchObject([ 1, 2, 5, 4 ])
})
it('should has w setter', () => {
    const values = [ 1, 2, 3, 4 ]
    const v = new ArrayVector4({ values, offset : 0, stride : 1 })

    v.w = 5

    expect(v.w).toBe(5)
    expect(values).toMatchObject([ 1, 2, 3, 5 ])
})
it('vectors created with default constructor should refer to different values', () => {
    const a = new ArrayVector4
    const b = new ArrayVector4

    a.x = 1
    a.y = 2
    a.z = 3
    a.w = 4

    expect(a).toMatchObject({ x : 1, y : 2, z : 3, w : 4 })
    expect(b).toMatchObject({ x : 0, y : 0, z : 0, w : 1 })
})
