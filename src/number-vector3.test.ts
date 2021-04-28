import { NumberVector3, Vector3 } from './glm'

it('should has constructor()', () => {
    const v = new NumberVector3

    expect(v.x).toBe(Vector3.default.x)
    expect(v.y).toBe(Vector3.default.y)
    expect(v.z).toBe(Vector3.default.z)
})
it('should has constructor({})', () => {
    const v = new NumberVector3({})

    expect(v.x).toBe(Vector3.default.x)
    expect(v.y).toBe(Vector3.default.y)
    expect(v.z).toBe(Vector3.default.z)
})
it('should has constructor({ x })', () => {
    const v = new NumberVector3({ x : 1 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(Vector3.default.y)
    expect(v.z).toBe(Vector3.default.z)
})
it('should has constructor({ y })', () => {
    const v = new NumberVector3({ y : 2 })

    expect(v.x).toBe(Vector3.default.x)
    expect(v.y).toBe(2)
    expect(v.z).toBe(Vector3.default.z)
})
it('should has constructor({ z })', () => {
    const v = new NumberVector3({ z : 3 })

    expect(v.x).toBe(Vector3.default.x)
    expect(v.y).toBe(Vector3.default.y)
    expect(v.z).toBe(3)
})
it('should has constructor({ x, y, z })', () => {
    const v = new NumberVector3({ x : 1, y : 2, z : 3 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
    expect(v.z).toBe(3)
})
it('should has x setter', () => {
    const v = new NumberVector3({ x : 1, y : 2, z : 3 })

    v.x = 5

    expect(v.x).toBe(5)
})
it('should has y setter', () => {
    const v = new NumberVector3({ x : 1, y : 2, z : 3 })

    v.y = 5

    expect(v.y).toBe(5)
})
it('should has z setter', () => {
    const v = new NumberVector3({ x : 1, y : 2, z : 3 })

    v.z = 5

    expect(v.z).toBe(5)
})
