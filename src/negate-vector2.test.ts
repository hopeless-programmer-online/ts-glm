import { negateVector2 as neg, vec2 } from './glm'

it('should square vec2', () => {
    expect(neg(vec2(1, 2))).toMatchObject({
        x : -1,
        y : -2,
    })
})
