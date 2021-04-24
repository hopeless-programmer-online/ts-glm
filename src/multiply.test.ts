import { mul, mat2, vec2 } from './glm'

it('should multiply number and number', () => {
    expect(mul(2, 3)).toBe(6)
})
it('should multiply number and vec2', () => {
    const { x, y } = mul( 2, vec2(3, 4) )

    expect(x).toBe(2 * 3)
    expect(y).toBe(2 * 4)
})
it('should multiply number and mat2', () => {
    const r = mul( 2, mat2([ 3, 4, 5, 6 ]) )

    expect(r[0][0]).toBe(2 * 3)
    expect(r[1][0]).toBe(2 * 5)
    expect(r[0][1]).toBe(2 * 4)
    expect(r[1][1]).toBe(2 * 6)
})
it('should multiply vec2 and number', () => {
    const { x, y } = mul( vec2(1, 2), 3 )

    expect(x).toBe(1 * 3)
    expect(y).toBe(2 * 3)
})
it('should multiply vec2 and vec2', () => {
    const { x, y } = mul( vec2(1, 2), vec2(3, 4) )

    expect(x).toBe(1 * 3)
    expect(y).toBe(2 * 4)
})
it('should multiply mat2 and number', () => {
    const r = mul( mat2([ 2, 3, 4, 5 ]), 6 )

    expect(r[0][0]).toBe(2 * 6)
    expect(r[1][0]).toBe(4 * 6)
    expect(r[0][1]).toBe(3 * 6)
    expect(r[1][1]).toBe(5 * 6)
})
it('should multiply mat2 and vec2', () => {
    const { x, y } = mul( mat2([ 1, 3, 2, 4 ]), vec2(5, 6) )

    expect(x).toBe(1 * 5 + 2 * 6)
    expect(y).toBe(3 * 5 + 4 * 6)
})
it('should multiply mat2 and mat2', () => {
    const r = mul( mat2([ 1, 3, 2, 4 ]), mat2([ 5, 7, 6, 8 ]) )

    expect(r[0][0]).toBe(1 * 5 + 2 * 7)
    expect(r[1][0]).toBe(1 * 6 + 2 * 8)
    expect(r[0][1]).toBe(3 * 5 + 4 * 7)
    expect(r[1][1]).toBe(3 * 6 + 4 * 8)
})
