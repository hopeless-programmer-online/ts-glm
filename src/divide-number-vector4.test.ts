import { divideNumberVector4 as op, vec4 } from './glm'

it('should divide number and Vector4', () => {
    expect(op(
        5,
        vec4(
            1,
            2,
            3,
            4,
        ),
    )).toMatchObject({
        x : 5 / 1,
        y : 5 / 2,
        z : 5 / 3,
        w : 5 / 4,
    })
})

