import { Vector4 } from './glm'

it('should export default values', () => {
    expect(Vector4.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
        w : 1,
    })
})
