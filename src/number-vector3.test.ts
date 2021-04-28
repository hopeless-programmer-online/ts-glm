import { NumberVector3 } from './glm'

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
