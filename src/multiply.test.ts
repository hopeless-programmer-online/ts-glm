import { Vector2, Vector3, Vector4, Matrix2x2, Matrix3x3, Matrix4x4, vec2, vec3, vec4, mat2, mat3, mat4, mul } from './glm'

it('should mul number and number', () => {
    const r : number = mul(1, 2)

    expect(r).toBe(1 * 2)
})
it('should mul number and vec2', () => {
    const r : Vector2 = mul(5, vec2(1, 2))

    expect(r).toMatchObject({ x : 5 * 1, y : 5 * 2 })
})
it('should mul number and vec3', () => {
    const r : Vector3 = mul(5, vec3(1, 2, 3))

    expect(r).toMatchObject({ x : 5 * 1, y : 5 * 2, z : 5 * 3 })
})
it('should mul number and vec4', () => {
    const r : Vector4 = mul(5, vec4(1, 2, 3, 4))

    expect(r).toMatchObject({ x : 5 * 1, y : 5 * 2, z : 5 * 3, w : 5 * 4 })
})
it('should mul number and mat2', () => {
    const r : Matrix2x2 = mul(
        20,
        mat2(
            1, 2,
            3, 4,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 * 1, y : 20 * 2 },
        1 : { x : 20 * 3, y : 20 * 4 },
    })
})
it('should mul number and mat3', () => {
    const r : Matrix3x3 = mul(
        20,
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 * 1, y : 20 * 2, z : 20 * 3 },
        1 : { x : 20 * 4, y : 20 * 5, z : 20 * 6 },
        2 : { x : 20 * 7, y : 20 * 8, z : 20 * 9 },
    })
})
it('should mul number and mat4', () => {
    const r : Matrix4x4 = mul(
        20,
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
    )

    expect(r).toMatchObject({
        0 : { x : 20 * 1,  y : 20 * 2,  z : 20 * 3,  w : 20 * 4 },
        1 : { x : 20 * 5,  y : 20 * 6,  z : 20 * 7,  w : 20 * 8 },
        2 : { x : 20 * 9,  y : 20 * 10, z : 20 * 11, w : 20 * 12 },
        3 : { x : 20 * 13, y : 20 * 14, z : 20 * 15, w : 20 * 16 },
    })
})

it('should mul vec2 and number', () => {
    const r : Vector2 = mul(vec2(1, 2), 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5 })
})
it('should mul vec2 and vec2', () => {
    const r : Vector2 = mul(vec2(1, 2), vec2(3, 4))

    expect(r).toMatchObject({ x : 1 * 3, y : 2 * 4 })
})
it('should mul vec2 and vec3 as vec2', () => {
    const r : Vector2 = mul(vec2(1, 2), vec3(3, 4, 100))

    expect(r).toMatchObject({ x : 1 * 3, y : 2 * 4 })
    expect(r).not.toHaveProperty('z')
})
it('should mul vec2 and vec4 as vec2', () => {
    const r : Vector2 = mul(vec2(1, 2), vec4(3, 4, 100, 200))

    expect(r).toMatchObject({ x : 1 * 3, y : 2 * 4 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})

it('should mul { x, y } and number', () => {
    const r : Vector2 = mul({ x : 1, y : 2 }, 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5 })
})
it('should mul { x, y } and { x, y }', () => {
    const r : Vector2 = mul({ x : 1, y : 2 }, { x : 3, y : 4 })

    expect(r).toMatchObject({ x : 1 * 3, y : 2 * 4 })
})
it('should mul [ number, number ] and [ number, number ]', () => {
    const r : Vector2 = mul([ 1, 2 ], [ 3, 4 ])

    expect(r).toMatchObject({ x : 1 * 3, y : 2 * 4 })
})


it('should mul vec3 and number', () => {
    const r : Vector3 = mul(vec3(1, 2, 3), 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5, z : 3 * 5 })
})
it('should mul vec3 and vec2 as vec2', () => {
    const r : Vector2 = mul(vec3(1, 2, 3), vec2(4, 5))

    expect(r).toMatchObject({ x : 1 * 4, y : 2 * 5 })
    expect(r).not.toHaveProperty('z')
})
it('should mul vec3 and vec3', () => {
    const r : Vector3 = mul(vec3(1, 2, 3), vec3(4, 5, 6))

    expect(r).toMatchObject({ x : 1 * 4, y : 2 * 5, z : 3 * 6 })
})
it('should mul vec3 and vec4 as vec3', () => {
    const r = mul(vec3(1, 2, 3), vec4(4, 5, 6, 7))

    expect(r).toMatchObject({ x : 1 * 4, y : 2 * 5, z : 3 * 6 })
    expect(r).not.toHaveProperty('w')
})

it('should mul { x, y, z } and number', () => {
    const r : Vector3 = mul({ x : 1, y : 2, z : 3 }, 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5, z : 3 * 5 })
})
it('should mul vec3 and vec3', () => {
    const r : Vector3 = mul({ x : 1, y : 2, z : 3 }, { x : 4, y : 5, z : 6 })

    expect(r).toMatchObject({ x : 1 * 4, y : 2 * 5, z : 3 * 6 })
})
it('should mul vec3 and vec3', () => {
    const r : Vector3 = mul([ 1, 2, 3 ], [ 4, 5, 6 ])

    expect(r).toMatchObject({ x : 1 * 4, y : 2 * 5, z : 3 * 6 })
})


it('should mul vec4 and number', () => {
    const r : Vector4 = mul(vec4(1, 2, 3, 4), 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5, z : 3 * 5, w : 4 * 5 })
})
it('should mul vec4 and vec2 as vec2', () => {
    const r : Vector2 = mul(vec4(1, 2, 3, 4), vec2(5, 6))

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 6 })
    expect(r).not.toHaveProperty('z')
    expect(r).not.toHaveProperty('w')
})
it('should mul vec4 and vec3 as vec3', () => {
    const r : Vector3 = mul(vec4(1, 2, 3, 4), vec3(5, 6, 7))

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 6, z : 3 * 7 })
    expect(r).not.toHaveProperty('w')
})
it('should mul vec4 and vec4', () => {
    const r : Vector4 = mul(vec4(1, 2, 3, 4), vec4(5, 6, 7, 8))

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 6, z : 3 * 7, w : 4 * 8 })
})

it('should mul vec4 and number', () => {
    const r : Vector4 = mul({ x : 1, y : 2, z : 3, w : 4 }, 5)

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 5, z : 3 * 5, w : 4 * 5 })
})
it('should mul vec4 and vec4', () => {
    const r : Vector4 = mul({ x : 1, y : 2, z : 3, w : 4 }, { x : 5, y : 6, z : 7, w : 8 })

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 6, z : 3 * 7, w : 4 * 8 })
})
it('should mul vec4 and vec4', () => {
    const r : Vector4 = mul([ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ])

    expect(r).toMatchObject({ x : 1 * 5, y : 2 * 6, z : 3 * 7, w : 4 * 8 })
})


it('should mul mat2 and number', () => {
    const r : Matrix2x2 = mul(
        mat2(
            1, 2,
            3, 4,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 * 20, y : 2 * 20 },
        1 : { x : 3 * 20, y : 4 * 20 },
    })
})
it('should multiply mat2 and vec2', () => {
    const r : Vector2 = mul(
        mat2(
            1, 2,
            3, 4,
        ),
        vec2(5, 6),
    )

    expect(r).toMatchObject({
        x : 1 * 5 + 3 * 6,
        y : 2 * 5 + 4 * 6,
    })
})
it('should multiply mat2 and mat2', () => {
    const r : Matrix2x2 = mul(
        mat2(
            1, 2,
            3, 4,
        ),
        mat2(
            5, 6,
            7, 8,
        )
    )

    expect(r).toMatchObject({
        0 : {
            x : 1 * 5 + 3 * 6,
            y : 2 * 5 + 4 * 6,
        },
        1 : {
            x : 1 * 7 + 3 * 8,
            y : 2 * 7 + 4 * 8,
        },
    })
})

it('should mul mat3 and number', () => {
    const r : Matrix3x3 = mul(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 * 20, y : 2 * 20, z : 3 * 20 },
        1 : { x : 4 * 20, y : 5 * 20, z : 6 * 20 },
        2 : { x : 7 * 20, y : 8 * 20, z : 9 * 20 },
    })
})
it('should multiply mat3 and vec3', () => {
    const r : Vector3 = mul(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        vec3(10, 11, 12),
    )

    expect(r).toMatchObject({
        x : 1 * 10 + 4 * 11 + 7 * 12,
        y : 2 * 10 + 5 * 11 + 8 * 12,
        z : 3 * 10 + 6 * 11 + 9 * 12,
    })
})
it('should multiply mat3 and mat3', () => {
    const r : Matrix3x3 = mul(
        mat3(
            1, 2, 3,
            4, 5, 6,
            7, 8, 9,
        ),
        mat3(
            11, 12, 13,
            14, 15, 16,
            17, 18, 19,
        )
    )

    expect(r).toMatchObject({
        0 : {
            x : 1 * 11 + 4 * 12 + 7 * 13,
            y : 1 * 14 + 4 * 15 + 7 * 16,
            z : 1 * 17 + 4 * 18 + 7 * 19,
        },
        1 : {
            x : 2 * 11 + 5 * 12 + 8 * 13,
            y : 2 * 14 + 5 * 15 + 8 * 16,
            z : 2 * 17 + 5 * 18 + 8 * 19,
        },
        2 : {
            x : 3 * 11 + 6 * 12 + 9 * 13,
            y : 3 * 14 + 6 * 15 + 9 * 16,
            z : 3 * 17 + 6 * 18 + 9 * 19,
        },
    })
})

it('should mul mat4 and number', () => {
    const r : Matrix4x4 = mul(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        20,
    )

    expect(r).toMatchObject({
        0 : { x : 1 * 20,  y : 2 * 20,  z : 3 * 20,  w : 4 * 20 },
        1 : { x : 5 * 20,  y : 6 * 20,  z : 7 * 20,  w : 8 * 20 },
        2 : { x : 9 * 20,  y : 10 * 20, z : 11 * 20, w : 12 * 20 },
        3 : { x : 13 * 20, y : 14 * 20, z : 15 * 20, w : 16 * 20 },
    })
})
it('should multiply mat4 and vec4', () => {
    const r : Vector4 = mul(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        vec4(17, 18, 19, 20),
    )

    expect(r).toMatchObject({
        x : 1 * 17 + 5 * 18 + 9  * 19 + 13 * 20,
        y : 2 * 17 + 6 * 18 + 10 * 19 + 14 * 20,
        z : 3 * 17 + 7 * 18 + 11 * 19 + 15 * 20,
        w : 4 * 17 + 8 * 18 + 12 * 19 + 16 * 20,
    })
})
it('should multiply mat4 and mat4', () => {
    const r : Matrix4x4 = mul(
        mat4(
            1,  2,  3,  4,
            5,  6,  7,  8,
            9,  10, 11, 12,
            13, 14, 15, 16,
        ),
        mat4(
            17, 18, 19, 20,
            21, 22, 23, 24,
            25, 26, 27, 28,
            29, 30, 31, 32,
        )
    )

    expect(r).toMatchObject({
        0 : {
            x : 1 * 17 + 5 * 18 + 9  * 19 + 13 * 20,
            y : 2 * 17 + 6 * 18 + 10 * 19 + 14 * 20,
            z : 3 * 17 + 7 * 18 + 11 * 19 + 15 * 20,
            w : 4 * 17 + 8 * 18 + 12 * 19 + 16 * 20,
        },
        1 : {
            x : 1 * 21 + 5 * 22 + 9  * 23 + 13 * 24,
            y : 2 * 21 + 6 * 22 + 10 * 23 + 14 * 24,
            z : 3 * 21 + 7 * 22 + 11 * 23 + 15 * 24,
            w : 4 * 21 + 8 * 22 + 12 * 23 + 16 * 24,
        },
        2 : {
            x : 1 * 25 + 5 * 26 + 9  * 27 + 13 * 28,
            y : 2 * 25 + 6 * 26 + 10 * 27 + 14 * 28,
            z : 3 * 25 + 7 * 26 + 11 * 27 + 15 * 28,
            w : 4 * 25 + 8 * 26 + 12 * 27 + 16 * 28,
        },
        3 : {
            x : 1 * 29 + 5 * 30 + 9  * 31 + 13 * 32,
            y : 2 * 29 + 6 * 30 + 10 * 31 + 14 * 32,
            z : 3 * 29 + 7 * 30 + 11 * 31 + 15 * 32,
            w : 4 * 29 + 8 * 30 + 12 * 31 + 16 * 32,
        },
    })
})
