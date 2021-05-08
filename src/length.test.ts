import { len, vec2, vec3, vec4 } from './glm'

it('should accept vec2', () => {
    expect( len(vec2(3, 4)) ).toBe( (3**2 + 4**2)**(1/2) )
})
it('should accept vec3', () => {
    expect( len(vec3(2, 3, 6)) ).toBe( (2**2 + 3**2 + 6**2)**(1/2) )
})
it('should accept vec4', () => {
    expect( len(vec4(5)) ).toBe( (5**2 + 5**2 + 5**2 + 5**2)**(1/2) )
})
