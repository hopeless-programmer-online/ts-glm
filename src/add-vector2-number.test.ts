import { addVector2Number as op, vec2 } from './glm'

it('should add Vector2 and number', () => {
    expect(op(
        vec2(
            1,
            2,
        ),
        5,
    )).toMatchObject({
        x : 1 + 5,
        y : 2 + 5,
    })
})

