import { lengthVector3, vec3 } from './glm'

it('should accept Vector3', () => {
    expect( lengthVector3(vec3(2, 3, 6)) ).toBe( (2**2 + 3**2 + 6**2)**(1/2) )
})
