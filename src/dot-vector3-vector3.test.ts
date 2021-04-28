import { dotVector3Vector3, NumberVector3 } from './glm'

it('should add NumberVector3 and NumberVector3', () => {
    expect(dotVector3Vector3(
        new NumberVector3({ x : 1, y : 2, z : 3 }),
        new NumberVector3({ x : 4, y : 5, z : 6 }),
    )).toBe(1 * 4 +  2 * 5 + 3 * 6)
})
