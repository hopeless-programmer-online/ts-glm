import { subtract, vec2, vec3, vec4, mat2, mat3, mat4 } from './glm'

it('should subtract number and number', () => {
    expect(subtract(1, 2)).toBe(1 - 2)
})
it('should subtract number and vec2', () => {
    expect(subtract(5, vec2(1, 2))).toMatchObject({ x : 5 - 1, y : 5 - 2 })
})
it('should subtract number and vec3', () => {
    expect(subtract(5, vec3(1, 2, 3))).toMatchObject({ x : 5 - 1, y : 5 - 2, z : 5 - 3 })
})
it('should subtract number and vec4', () => {
    expect(subtract(5, vec4(1, 2, 3, 4))).toMatchObject({ x : 5 - 1, y : 5 - 2, z : 5 - 3, w : 5 - 4 })
})
it('should subtract number and mat2', () => {
    expect(subtract(
        20,
        mat2(
            1, 2,
            3, 4,
        ),
    )).toMatchObject({
        0 : { x : 20 - 1, y : 20 - 2 },
        1 : { x : 20 - 3, y : 20 - 4 },
    })
})
it('should subtract number and mat3', () => {
    expect(subtract(
        20,
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
    )).toMatchObject({
        0 : { x : 20 - 1, y : 20 - 2, z : 20 - 3 },
        1 : { x : 20 - 4, y : 20 - 5, z : 20 - 6 },
        2 : { x : 20 - 7, y : 20 - 8, z : 20 - 9 },
    })
})
it('should subtract number and mat4', () => {
    expect(subtract(
        20,
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
    )).toMatchObject({
        0 : { x : 20 - 1,  y : 20 - 2,  z : 20 - 3,  w : 20 - 4 },
        1 : { x : 20 - 5,  y : 20 - 6,  z : 20 - 7,  w : 20 - 8 },
        2 : { x : 20 - 9,  y : 20 - 10, z : 20 - 11, w : 20 - 12 },
        3 : { x : 20 - 13, y : 20 - 14, z : 20 - 15, w : 20 - 16 },
    })
})

it('should subtract vec2 and number', () => {
    expect(subtract(vec2(1, 2), 5)).toMatchObject({ x : 1 - 5, y : 2 - 5 })
})
it('should subtract vec2 and vec2', () => {
    expect(subtract(vec2(1, 2), vec2(3, 4))).toMatchObject({ x : 1 - 3, y : 2 - 4 })
})
it('should subtract vec2 and vec3 as vec2', () => {
    const r = subtract(vec2(1, 2), vec3(3, 4, 100))

    expect(r).toMatchObject({ x : 1 - 3, y : 2 - 4 })
    expect(r).not.toHaveProperty('z')
})
it('should subtract vec2 and vec4 as vec2', () => {
    const r = subtract(vec2(1, 2), vec4(3, 4, 100, 200))

    expect(r).toMatchObject({ x : 1 - 3, y : 2 - 4 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})

it('should subtract vec2 and number', () => {
    expect(subtract(vec3(1, 2, 3), 5)).toMatchObject({ x : 1 - 5, y : 2 - 5, z : 3 - 5 })
})
it('should subtract vec3 and vec2 as vec2', () => {
    const r = subtract(vec3(1, 2, 3), vec2(4, 5))

    expect(r).toMatchObject({ x : 1 - 4, y : 2 - 5 })
    expect(r).not.toHaveProperty('z')
})
it('should subtract vec3 and vec3', () => {
    expect(subtract(vec3(1, 2, 3), vec3(4, 5, 6))).toMatchObject({ x : 1 - 4, y : 2 - 5, z : 3 - 6 })
})
it('should subtract vec3 and vec4 as vec3', () => {
    const r = subtract(vec3(1, 2, 3), vec4(4, 5, 6, 7))

    expect(r).toMatchObject({ x : 1 - 4, y : 2 - 5, z : 3 - 6 })
    expect(r).not.toHaveProperty('w')
})

it('should subtract vec4 and number', () => {
    expect(subtract(vec4(1, 2, 3, 4), 5)).toMatchObject({ x : 1 - 5, y : 2 - 5, z : 3 - 5, w : 4 - 5 })
})
it('should subtract vec4 and vec2 as vec2', () => {
    const r = subtract(vec4(1, 2, 3, 4), vec2(5, 6))

    expect(r).toMatchObject({ x : 1 - 5, y : 2 - 6 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})
it('should subtract vec4 and vec3 as vec3', () => {
    const r = subtract(vec4(1, 2, 3, 4), vec3(5, 6, 7))

    expect(r).toMatchObject({ x : 1 - 5, y : 2 - 6, z : 3 - 7 })
    expect(r).not.toHaveProperty('w')
})
it('should subtract vec4 and vec4', () => {
    expect(subtract(vec4(1, 2, 3, 4), vec4(5, 6, 7, 8))).toMatchObject({ x : 1 - 5, y : 2 - 6, z : 3 - 7, w : 4 - 8 })
})


it('should subtract mat2 and number', () => {
    expect(subtract(
        mat2(
            1, 2,
            3, 4,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 - 20, y : 2 - 20 },
        1 : { x : 3 - 20, y : 4 - 20 },
    })
})

it('should subtract mat3 and number', () => {
    expect(subtract(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 - 20, y : 2 - 20, z : 3 - 20 },
        1 : { x : 4 - 20, y : 5 - 20, z : 6 - 20 },
        2 : { x : 7 - 20, y : 8 - 20, z : 9 - 20 },
    })
})

it('should subtract mat4 and number', () => {
    expect(subtract(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        20,
    )).toMatchObject({
        0 : { x : 1 - 20,  y : 2 - 20,  z : 3 - 20,  w : 4 - 20 },
        1 : { x : 5 - 20,  y : 6 - 20,  z : 7 - 20,  w : 8 - 20 },
        2 : { x : 9 - 20,  y : 10 - 20, z : 11 - 20, w : 12 - 20 },
        3 : { x : 13 - 20, y : 14 - 20, z : 15 - 20, w : 16 - 20 },
    })
})
