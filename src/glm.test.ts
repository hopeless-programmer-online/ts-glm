import * as glm from './glm'

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'

import NumberVector2 from './number-vector2'
import NumberVector3 from './number-vector3'
import NumberVector4 from './number-vector4'

import ArrayVector2 from './array-vector2'

import vec2 from './vec2'
import vec3 from './vec3'
import vec4 from './vec4'

import addVector2Vector2 from './add-vector2-vector2'
import addVector3Vector3 from './add-vector3-vector3'
import addVector4Vector4 from './add-vector4-vector4'

import subtractVector2Vector2 from './subtract-vector2-vector2'
import subtractVector3Vector3 from './subtract-vector3-vector3'
import subtractVector4Vector4 from './subtract-vector4-vector4'

import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyVector3Vector3 from './multiply-vector3-vector3'
import multiplyVector4Vector4 from './multiply-vector4-vector4'

import divideVector2Vector2 from './divide-vector2-vector2'
import divideVector3Vector3 from './divide-vector3-vector3'
import divideVector4Vector4 from './divide-vector4-vector4'

import dotVector2Vector2 from './dot-vector2-vector2'
import dotVector3Vector3 from './dot-vector3-vector3'
import dotVector4Vector4 from './dot-vector4-vector4'

import lengthVector2 from './length-vector2'
import lengthVector3 from './length-vector3'
import lengthVector4 from './length-vector4'

it('should be object', () => {
    expect(typeof glm).toBe('object')
})
it('should export Vector2', () => {
    expect(glm).toHaveProperty('Vector2', Vector2)
})
it('should export Vector3', () => {
    expect(glm).toHaveProperty('Vector3', Vector3)
})
it('should export Vector4', () => {
    expect(glm).toHaveProperty('Vector4', Vector4)
})
it('should export NumberVector2', () => {
    expect(glm).toHaveProperty('NumberVector2', NumberVector2)
})
it('should export NumberVector3', () => {
    expect(glm).toHaveProperty('NumberVector3', NumberVector3)
})
it('should export NumberVector4', () => {
    expect(glm).toHaveProperty('NumberVector4', NumberVector4)
})
it('should export ArrayVector2', () => {
    expect(glm).toHaveProperty('ArrayVector2', ArrayVector2)
})
it('should export vec2', () => {
    expect(glm).toHaveProperty('vec2', vec2)
})
it('should export vec3', () => {
    expect(glm).toHaveProperty('vec3', vec3)
})
it('should export vec4', () => {
    expect(glm).toHaveProperty('vec4', vec4)
})
it('should export addVector2Vector2', () => {
    expect(glm).toHaveProperty('addVector2Vector2', addVector2Vector2)
})
it('should export addVector3Vector3', () => {
    expect(glm).toHaveProperty('addVector3Vector3', addVector3Vector3)
})
it('should export addVector4Vector4', () => {
    expect(glm).toHaveProperty('addVector4Vector4', addVector4Vector4)
})
it('should export subtractVector2Vector2', () => {
    expect(glm).toHaveProperty('subtractVector2Vector2', subtractVector2Vector2)
})
it('should export subtractVector3Vector3', () => {
    expect(glm).toHaveProperty('subtractVector3Vector3', subtractVector3Vector3)
})
it('should export subtractVector4Vector4', () => {
    expect(glm).toHaveProperty('subtractVector4Vector4', subtractVector4Vector4)
})
it('should export multiplyVector2Vector2', () => {
    expect(glm).toHaveProperty('multiplyVector2Vector2', multiplyVector2Vector2)
})
it('should export multiplyVector3Vector3', () => {
    expect(glm).toHaveProperty('multiplyVector3Vector3', multiplyVector3Vector3)
})
it('should export multiplyVector4Vector4', () => {
    expect(glm).toHaveProperty('multiplyVector4Vector4', multiplyVector4Vector4)
})
it('should export divideVector2Vector2', () => {
    expect(glm).toHaveProperty('divideVector2Vector2', divideVector2Vector2)
})
it('should export divideVector3Vector3', () => {
    expect(glm).toHaveProperty('divideVector3Vector3', divideVector3Vector3)
})
it('should export divideVector4Vector4', () => {
    expect(glm).toHaveProperty('divideVector4Vector4', divideVector4Vector4)
})
it('should export dotVector2Vector2', () => {
    expect(glm).toHaveProperty('dotVector2Vector2', dotVector2Vector2)
})
it('should export dotVector3Vector3', () => {
    expect(glm).toHaveProperty('dotVector3Vector3', dotVector3Vector3)
})
it('should export dotVector4Vector4', () => {
    expect(glm).toHaveProperty('dotVector4Vector4', dotVector4Vector4)
})
it('should export lengthVector2', () => {
    expect(glm).toHaveProperty('lengthVector2', lengthVector2)
})
it('should export lengthVector3', () => {
    expect(glm).toHaveProperty('lengthVector3', lengthVector3)
})
it('should export lengthVector4', () => {
    expect(glm).toHaveProperty('lengthVector4', lengthVector4)
})
