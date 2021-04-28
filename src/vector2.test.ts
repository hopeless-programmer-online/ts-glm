import { Vector2 } from './glm'

it('should export default values', () => {
    expect(Vector2.default).toMatchObject({
        x : 0,
        y : 0,
    })
})
