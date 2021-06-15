import { negateVector4 as neg, vec4 } from './glm'

it('should square vec4', () => {
    expect(neg(vec4(1, 2, 3, 4))).toMatchObject({
        x : -1,
        y : -2,
        z : -3,
        w : -4,
    })
})
