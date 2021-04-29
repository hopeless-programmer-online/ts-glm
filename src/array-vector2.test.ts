import { ArrayVector2 } from './glm'

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
})
it('should has y setter', () => {
    const values = [ 1, 2 ]
    const v = new ArrayVector2({ values, offset : 0, stride : 1 })

    v.y = 5

    expect(v.y).toBe(5)
})
