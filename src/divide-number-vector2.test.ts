import { divideNumberVector2 as op, vec2 } from './glm'

it('should divide number and Vector2', () => {
    expect(op(
        5,
        vec2(
            1,
            2,
        ),
    )).toMatchObject({
        x : 5 / 1,
        y : 5 / 2,
    })
})

