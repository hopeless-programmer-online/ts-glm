import { addVector3Vector3, vec3 } from './glm'

it('should add NumberVector3 and NumberVector3', () => {
    expect(addVector3Vector3( vec3(1, 2, 3), vec3(4, 5, 6) )).toMatchObject({
        x : 1 + 4,
        y : 2 + 5,
        z : 3 + 6,
    })
})
