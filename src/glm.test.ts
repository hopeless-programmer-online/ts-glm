import * as glm from './glm'

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'

import NumberVector2 from './number-vector2'
import NumberVector3 from './number-vector3'
import NumberVector4 from './number-vector4'

import addVector2Vector2 from './add-vector2-vector2'
import addVector3Vector3 from './add-vector3-vector3'
import addVector4Vector4 from './add-vector4-vector4'

import subtractVector2Vector2 from './subtract-vector2-vector2'
import subtractVector3Vector3 from './subtract-vector3-vector3'
import subtractVector4Vector4 from './subtract-vector4-vector4'

import multiplyVector2Vector2 from './multiply-vector2-vector2'

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
