import { ArrayVector3, Vector3 } from './glm'

it('should export default values', () => {
    expect(ArrayVector3.default).toMatchObject({
        values : [ Vector3.default.x, Vector3.default.y, Vector3.default.z ],
        offset : 0,
        stride : 1,
    })
})
it('should has constructor()', () => {
    const v = new ArrayVector3

    expect(v).toMatchObject({ x : Vector3.default.x, y : Vector3.default.y, z : Vector3.default.z })
})
it('should has constructor({})', () => {
    const v = new ArrayVector3({})

    expect(v).toMatchObject({ x : Vector3.default.x, y : Vector3.default.y, z : Vector3.default.z })
})
it('should has constructor({ values })', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should has constructor({ values, offset })', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, offset : 0 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should has constructor({ values, stride })', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, stride : 1 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should has constructor({ values, offset, stride })', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, offset : 0, stride : 1 })

    expect(v).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should has x setter', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, offset : 0, stride : 1 })

    v.x = 5

    expect(v.x).toBe(5)
    expect(values).toMatchObject([ 5, 2, 3 ])
})
it('should has y setter', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, offset : 0, stride : 1 })

    v.y = 5

    expect(v.y).toBe(5)
    expect(values).toMatchObject([ 1, 5, 3 ])
})
it('should has z setter', () => {
    const values = [ 1, 2, 3 ]
    const v = new ArrayVector3({ values, offset : 0, stride : 1 })

    v.z = 5

    expect(v.z).toBe(5)
    expect(values).toMatchObject([ 1, 2, 5 ])
})
it('vectors created with default constructor should refer to different values', () => {
    const a = new ArrayVector3
    const b = new ArrayVector3

    a.x = 1
    a.y = 2
    a.z = 3

    expect(a).toMatchObject({ x : 1, y : 2, z : 3 })
    expect(b).toMatchObject({ x : 0, y : 0, z : 0 })
})
