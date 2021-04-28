import { Vector3 } from './glm'

it('should export default values', () => {
    expect(Vector3.default).toMatchObject({
        x : 0,
        y : 0,
        z : 0,
    })
})
