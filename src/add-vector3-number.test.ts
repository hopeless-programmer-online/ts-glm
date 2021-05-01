import { addVector3Number as op, vec3 } from './glm'

it('should add Vector3 and number', () => {
    expect(op(
        vec3(
            1,
            2,
            3,
        ),
        5,
    )).toMatchObject({
        x : 1 + 5,
        y : 2 + 5,
        z : 3 + 5,
    })
})

