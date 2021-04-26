import { multiplyMatrix3Number as mul, mat3 } from './glm'

it('should multiply mat3 and number', () => {
    expect( mul(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        10
    ) ).toMatchObject({
        0 : { x : 10, y : 20, z : 30 },
        1 : { x : 40, y : 50, z : 60 },
        2 : { x : 70, y : 80, z : 90 },
    })
})
