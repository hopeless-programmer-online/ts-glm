import { NumberVector2 } from './glm'

it('should has constructor({ x, y })', () => {
    const v = new NumberVector2({ x : 1, y : 2 })

    expect(v.x).toBe(1)
    expect(v.y).toBe(2)
})
it('should has x setter', () => {
    const v = new NumberVector2({ x : 1, y : 2 })

    v.x = 5

    expect(v.x).toBe(5)
})
it('should has y setter', () => {
    const v = new NumberVector2({ x : 1, y : 2 })

    v.y = 5

    expect(v.y).toBe(5)
})
