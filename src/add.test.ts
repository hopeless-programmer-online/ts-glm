import { Vector2, Vector3, Vector4, Matrix2x2, Matrix3x3, Matrix4x4, vec2, vec3, vec4, mat2, mat3, mat4, add } from './glm'

it('should add number and number', () => {
    const r : number = add(1, 2)

    expect(r).toBe(1 + 2)
})
it('should add number and vec2', () => {
    const r : Vector2 = add(5, vec2(1, 2))

    expect(r).toMatchObject({ x : 5 + 1, y : 5 + 2 })
})
it('should add number and vec3', () => {
    const r : Vector3 = add(5, vec3(1, 2, 3))

    expect(r).toMatchObject({ x : 5 + 1, y : 5 + 2, z : 5 + 3 })
})
it('should add number and vec4', () => {
    const r : Vector4 = add(5, vec4(1, 2, 3, 4))

    expect(r).toMatchObject({ x : 5 + 1, y : 5 + 2, z : 5 + 3, w : 5 + 4 })
})
it('should add number and mat2', () => {
    const r : Matrix2x2 = add(
        20,
        mat2(
            1, 2,
            3, 4,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 + 1, y : 20 + 2 },
        1 : { x : 20 + 3, y : 20 + 4 },
    })
})
it('should add number and mat3', () => {
    const r : Matrix3x3 = add(
        20,
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 + 1, y : 20 + 2, z : 20 + 3 },
        1 : { x : 20 + 4, y : 20 + 5, z : 20 + 6 },
        2 : { x : 20 + 7, y : 20 + 8, z : 20 + 9 },
    })
})
it('should add number and mat4', () => {
    const r : Matrix4x4 = add(
        20,
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 + 1,  y : 20 + 2,  z : 20 + 3,  w : 20 + 4 },
        1 : { x : 20 + 5,  y : 20 + 6,  z : 20 + 7,  w : 20 + 8 },
        2 : { x : 20 + 9,  y : 20 + 10, z : 20 + 11, w : 20 + 12 },
        3 : { x : 20 + 13, y : 20 + 14, z : 20 + 15, w : 20 + 16 },
    })
})

it('should add vec2 and number', () => {
    const r : Vector2 = add(vec2(1, 2), 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5 })
})
it('should add vec2 and vec2', () => {
    const r : Vector2 = add(vec2(1, 2), vec2(3, 4))

    expect(r).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should add vec2 and vec3 as vec2', () => {
    const r : Vector2 = add(vec2(1, 2), vec3(3, 4, 100))

    expect(r).toMatchObject({ x : 1 + 3, y : 2 + 4 })
    expect(r).not.toHaveProperty('z')
})
it('should add vec2 and vec4 as vec2', () => {
    const r : Vector2 = add(vec2(1, 2), vec4(3, 4, 100, 200))

    expect(r).toMatchObject({ x : 1 + 3, y : 2 + 4 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})

it('should add { x, y } and number', () => {
    const r : Vector2 = add({ x : 1, y : 2 }, 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5 })
})
it('should add { x, y } and { x, y }', () => {
    const r : Vector2 = add({ x : 1, y : 2 }, { x : 3, y : 4 })

    expect(r).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})
it('should add [ number, number ] and [ number, number ]', () => {
    const r : Vector2 = add([ 1, 2 ], [ 3, 4 ])

    expect(r).toMatchObject({ x : 1 + 3, y : 2 + 4 })
})


it('should add vec3 and number', () => {
    const r : Vector3 = add(vec3(1, 2, 3), 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5, z : 3 + 5 })
})
it('should add vec3 and vec2 as vec2', () => {
    const r : Vector2 = add(vec3(1, 2, 3), vec2(4, 5))

    expect(r).toMatchObject({ x : 1 + 4, y : 2 + 5 })
    expect(r).not.toHaveProperty('z')
})
it('should add vec3 and vec3', () => {
    const r : Vector3 = add(vec3(1, 2, 3), vec3(4, 5, 6))

    expect(r).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
it('should add vec3 and vec4 as vec3', () => {
    const r = add(vec3(1, 2, 3), vec4(4, 5, 6, 7))

    expect(r).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
    expect(r).not.toHaveProperty('w')
})

it('should add { x, y, z } and number', () => {
    const r : Vector3 = add({ x : 1, y : 2, z : 3 }, 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5, z : 3 + 5 })
})
it('should add vec3 and vec3', () => {
    const r : Vector3 = add({ x : 1, y : 2, z : 3 }, { x : 4, y : 5, z : 6 })

    expect(r).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})
it('should add vec3 and vec3', () => {
    const r : Vector3 = add([ 1, 2, 3 ], [ 4, 5, 6 ])

    expect(r).toMatchObject({ x : 1 + 4, y : 2 + 5, z : 3 + 6 })
})


it('should add vec4 and number', () => {
    const r : Vector4 = add(vec4(1, 2, 3, 4), 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5, z : 3 + 5, w : 4 + 5 })
})
it('should add vec4 and vec2 as vec2', () => {
    const r : Vector2 = add(vec4(1, 2, 3, 4), vec2(5, 6))

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 6 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})
it('should add vec4 and vec3 as vec3', () => {
    const r : Vector3 = add(vec4(1, 2, 3, 4), vec3(5, 6, 7))

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 6, z : 3 + 7 })
    expect(r).not.toHaveProperty('w')
})
it('should add vec4 and vec4', () => {
    const r : Vector4 = add(vec4(1, 2, 3, 4), vec4(5, 6, 7, 8))

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 6, z : 3 + 7, w : 4 + 8 })
})

it('should add vec4 and number', () => {
    const r : Vector4 = add({ x : 1, y : 2, z : 3, w : 4 }, 5)

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 5, z : 3 + 5, w : 4 + 5 })
})
it('should add vec4 and vec4', () => {
    const r : Vector4 = add({ x : 1, y : 2, z : 3, w : 4 }, { x : 5, y : 6, z : 7, w : 8 })

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 6, z : 3 + 7, w : 4 + 8 })
})
it('should add vec4 and vec4', () => {
    const r : Vector4 = add([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ])

    expect(r).toMatchObject({ x : 1 + 5, y : 2 + 6, z : 3 + 7, w : 4 + 8 })
})


it('should add mat2 and number', () => {
    const r : Matrix2x2 = add(
        mat2(
            1, 2,
            3, 4,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 + 20, y : 2 + 20 },
        1 : { x : 3 + 20, y : 4 + 20 },
    })
})

it('should add mat3 and number', () => {
    const r : Matrix3x3 = add(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 + 20, y : 2 + 20, z : 3 + 20 },
        1 : { x : 4 + 20, y : 5 + 20, z : 6 + 20 },
        2 : { x : 7 + 20, y : 8 + 20, z : 9 + 20 },
    })
})

it('should add mat4 and number', () => {
    const r : Matrix4x4 = add(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 + 20,  y : 2 + 20,  z : 3 + 20,  w : 4 + 20 },
        1 : { x : 5 + 20,  y : 6 + 20,  z : 7 + 20,  w : 8 + 20 },
        2 : { x : 9 + 20,  y : 10 + 20, z : 11 + 20, w : 12 + 20 },
        3 : { x : 13 + 20, y : 14 + 20, z : 15 + 20, w : 16 + 20 },
    })
})
