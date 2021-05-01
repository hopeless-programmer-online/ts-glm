import { subtractNumberVector3 as op, vec3 } from './glm'

it('should subtract number and Vector3', () => {
    expect(op(
        5,
        vec3(
            1,
            2,
            3,
        ),
    )).toMatchObject({
        x : 5 - 1,
        y : 5 - 2,
        z : 5 - 3,
    })
})

