import { NumberVector4, Vector4 } from './glm'

it('should has constructor()', () => {
    const v = new NumberVector4

    expect(v.x).toBe(Vector4.default.x)
    expect(v.y).toBe(Vector4.default.y)
    expect(v.z).toBe(Vector4.default.z)
    expect(v.w).toBe(Vector4.default.w)
})
it('should has constructor({})', () => {
    const v = new NumberVector4({})

    expect(v.x).toBe(Vector4.default.x)
    expect(v.y).toBe(Vector4.default.y)
    expect(v.z).toBe(Vector4.default.z)
    expect(v.w).toBe(Vector4.default.w)
})
it('should has constructor({ x })', () => {
    const v = new NumberVector4({ x : 1 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(Vector4.default.y)
    expect(v.z).toBe(Vector4.default.z)
    expect(v.w).toBe(Vector4.default.w)
})
it('should has constructor({ y })', () => {
    const v = new NumberVector4({ y : 2 })

    expect(v.x).toBe(Vector4.default.x)
    expect(v.y).toBe(2)
    expect(v.z).toBe(Vector4.default.z)
    expect(v.w).toBe(Vector4.default.w)
})
it('should has constructor({ z })', () => {
    const v = new NumberVector4({ z : 3 })

    expect(v.x).toBe(Vector4.default.x)
    expect(v.y).toBe(Vector4.default.y)
    expect(v.z).toBe(3)
    expect(v.w).toBe(Vector4.default.w)
})
it('should has constructor({ w })', () => {
    const v = new NumberVector4({ w : 4 })

    expect(v.x).toBe(Vector4.default.x)
    expect(v.y).toBe(Vector4.default.y)
    expect(v.z).toBe(Vector4.default.z)
    expect(v.w).toBe(4)
})
it('should has constructor({ x, y, z, w })', () => {
    const v = new NumberVector4({ x : 1, y : 2, z : 3, w : 4 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
    expect(v.z).toBe(3)
    expect(v.w).toBe(4)
})
it('should has x setter', () => {
    const v = new NumberVector4({ x : 1, y : 2, z : 3, w : 4 })

    v.x = 5

    expect(v.x).toBe(5)
})
it('should has y setter', () => {
    const v = new NumberVector4({ x : 1, y : 2, z : 3, w : 4 })

    v.y = 5

    expect(v.y).toBe(5)
})
it('should has z setter', () => {
    const v = new NumberVector4({ x : 1, y : 2, z : 3, w : 4 })

    v.z = 5

    expect(v.z).toBe(5)
})
it('should has w setter', () => {
    const v = new NumberVector4({ x : 1, y : 2, z : 3, w : 4 })

    v.w = 5

    expect(v.w).toBe(5)
})
