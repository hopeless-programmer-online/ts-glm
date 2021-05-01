import { divideVector4Number as op, vec4 } from './glm'

it('should divide Vector4 and number', () => {
    expect(op(
        vec4(
            1,
            2,
            3,
            4,
        ),
        5,
    )).toMatchObject({
        x : 1 / 5,
        y : 2 / 5,
        z : 3 / 5,
        w : 4 / 5,
    })
})

