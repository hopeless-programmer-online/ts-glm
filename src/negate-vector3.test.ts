import { negateVector3 as neg, vec3 } from './glm'

it('should negate Vector3', () => {
    expect(neg(vec3(1, 2, 3))).toMatchObject({
        x : -1,
        y : -2,
        z : -3,
    })
})
