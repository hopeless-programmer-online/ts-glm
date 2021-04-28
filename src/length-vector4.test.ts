import { lengthVector4, vec4 } from './glm'

it('should accept Vector4', () => {
    expect( lengthVector4(vec4(5)) ).toBe( (5**2 + 5**2 + 5**2 + 5**2)**(1/2) )
})
