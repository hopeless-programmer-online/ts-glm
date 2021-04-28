import { divideVector3Vector3, NumberVector3 } from './glm'

it('should divide NumberVector3 and NumberVector3', () => {
    expect(divideVector3Vector3(
        new NumberVector3({ x : 1, y : 2, z : 3 }),
        new NumberVector3({ x : 4, y : 5, z : 6 }),
    )).toMatchObject({
        x : 1 / 4,
        y : 2 / 5,
        z : 3 / 6,
    })
})
