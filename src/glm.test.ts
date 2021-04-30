import * as glm from './glm'

import Vector2 from './vector2'
import Vector3 from './vector3'
import Vector4 from './vector4'

import Matrix2x2 from './matrix2x2'
import Matrix3x3 from './matrix3x3'
import Matrix4x4 from './matrix4x4'

import Matrix2x2Columns from './matrix2x2-columns'
import Matrix3x3Columns from './matrix3x3-columns'
import Matrix4x4Columns from './matrix4x4-columns'

import Matrix2x2Rows from './matrix2x2-rows'
import Matrix3x3Rows from './matrix3x3-rows'
import Matrix4x4Rows from './matrix4x4-rows'

import NumberVector2 from './number-vector2'
import NumberVector3 from './number-vector3'
import NumberVector4 from './number-vector4'

import ArrayVector2 from './array-vector2'
import ArrayVector3 from './array-vector3'
import ArrayVector4 from './array-vector4'

import ArrayMatrix2x2 from './array-matrix2x2'
import ArrayMatrix3x3 from './array-matrix3x3'
import ArrayMatrix4x4 from './array-matrix4x4'

import ArrayMatrix2x2Columns from './array-matrix2x2-columns'
import ArrayMatrix3x3Columns from './array-matrix3x3-columns'
import ArrayMatrix4x4Columns from './array-matrix4x4-columns'

import ArrayMatrix2x2Rows from './array-matrix2x2-rows'
import ArrayMatrix3x3Rows from './array-matrix3x3-rows'
import ArrayMatrix4x4Rows from './array-matrix4x4-rows'

import vec2 from './vec2'
import vec3 from './vec3'
import vec4 from './vec4'

import mat2 from './mat2'
import mat3 from './mat3'
import mat4 from './mat4'

import transposeMatrix2x2 from './transpose-matrix2x2'
import transposeMatrix3x3 from './transpose-matrix3x3'
import transposeMatrix4x4 from './transpose-matrix4x4'

import addVector2Vector2 from './add-vector2-vector2'
import addVector3Vector3 from './add-vector3-vector3'
import addVector4Vector4 from './add-vector4-vector4'

import subtractVector2Vector2 from './subtract-vector2-vector2'
import subtractVector3Vector3 from './subtract-vector3-vector3'
import subtractVector4Vector4 from './subtract-vector4-vector4'

import multiplyVector2Vector2 from './multiply-vector2-vector2'
import multiplyVector3Vector3 from './multiply-vector3-vector3'
import multiplyVector4Vector4 from './multiply-vector4-vector4'

import multiplyMatrix2x2Vector2 from './multiply-matrix2x2-vector2'
import multiplyMatrix3x3Vector3 from './multiply-matrix3x3-vector3'
import multiplyMatrix4x4Vector4 from './multiply-matrix4x4-vector4'

import multiplyMatrix2x2Matrix2x2 from './multiply-matrix2x2-matrix2x2'
import multiplyMatrix3x3Matrix3x3 from './multiply-matrix3x3-matrix3x3'
import multiplyMatrix4x4Matrix4x4 from './multiply-matrix4x4-matrix4x4'

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
it('should export Matrix2x2', () => {
    expect(glm).toHaveProperty('Matrix2x2', Matrix2x2)
})
it('should export Matrix3x3', () => {
    expect(glm).toHaveProperty('Matrix3x3', Matrix3x3)
})
it('should export Matrix4x4', () => {
    expect(glm).toHaveProperty('Matrix4x4', Matrix4x4)
})
it('should export Matrix2x2Columns', () => {
    expect(glm).toHaveProperty('Matrix2x2Columns', Matrix2x2Columns)
})
it('should export Matrix3x3Columns', () => {
    expect(glm).toHaveProperty('Matrix3x3Columns', Matrix3x3Columns)
})
it('should export Matrix4x4Columns', () => {
    expect(glm).toHaveProperty('Matrix4x4Columns', Matrix4x4Columns)
})
it('should export Matrix2x2Rows', () => {
    expect(glm).toHaveProperty('Matrix2x2Rows', Matrix2x2Rows)
})
it('should export Matrix3x3Rows', () => {
    expect(glm).toHaveProperty('Matrix3x3Rows', Matrix3x3Rows)
})
it('should export Matrix4x4Rows', () => {
    expect(glm).toHaveProperty('Matrix4x4Rows', Matrix4x4Rows)
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
it('should export ArrayVector3', () => {
    expect(glm).toHaveProperty('ArrayVector3', ArrayVector3)
})
it('should export ArrayVector4', () => {
    expect(glm).toHaveProperty('ArrayVector4', ArrayVector4)
})
it('should export ArrayMatrix2x2', () => {
    expect(glm).toHaveProperty('ArrayMatrix2x2', ArrayMatrix2x2)
})
it('should export ArrayMatrix3x3', () => {
    expect(glm).toHaveProperty('ArrayMatrix3x3', ArrayMatrix3x3)
})
it('should export ArrayMatrix4x4', () => {
    expect(glm).toHaveProperty('ArrayMatrix4x4', ArrayMatrix4x4)
})
it('should export ArrayMatrix2x2Columns', () => {
    expect(glm).toHaveProperty('ArrayMatrix2x2Columns', ArrayMatrix2x2Columns)
})
it('should export ArrayMatrix3x3Columns', () => {
    expect(glm).toHaveProperty('ArrayMatrix3x3Columns', ArrayMatrix3x3Columns)
})
it('should export ArrayMatrix4x4Columns', () => {
    expect(glm).toHaveProperty('ArrayMatrix4x4Columns', ArrayMatrix4x4Columns)
})
it('should export ArrayMatrix2x2Rows', () => {
    expect(glm).toHaveProperty('ArrayMatrix2x2Rows', ArrayMatrix2x2Rows)
})
it('should export ArrayMatrix3x3Rows', () => {
    expect(glm).toHaveProperty('ArrayMatrix3x3Rows', ArrayMatrix3x3Rows)
})
it('should export ArrayMatrix4x4Rows', () => {
    expect(glm).toHaveProperty('ArrayMatrix4x4Rows', ArrayMatrix4x4Rows)
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
it('should export mat2', () => {
    expect(glm).toHaveProperty('mat2', mat2)
})
it('should export mat3', () => {
    expect(glm).toHaveProperty('mat3', mat3)
})
it('should export mat4', () => {
    expect(glm).toHaveProperty('mat4', mat4)
})
it('should export transposeMatrix2x2', () => {
    expect(glm).toHaveProperty('transposeMatrix2x2', transposeMatrix2x2)
})
it('should export transposeMatrix3x3', () => {
    expect(glm).toHaveProperty('transposeMatrix3x3', transposeMatrix3x3)
})
it('should export transposeMatrix4x4', () => {
    expect(glm).toHaveProperty('transposeMatrix4x4', transposeMatrix4x4)
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
it('should export multiplyMatrix2x2Vector2', () => {
    expect(glm).toHaveProperty('multiplyMatrix2x2Vector2', multiplyMatrix2x2Vector2)
})
it('should export multiplyMatrix3x3Vector3', () => {
    expect(glm).toHaveProperty('multiplyMatrix3x3Vector3', multiplyMatrix3x3Vector3)
})
it('should export multiplyMatrix4x4Vector4', () => {
    expect(glm).toHaveProperty('multiplyMatrix4x4Vector4', multiplyMatrix4x4Vector4)
})
it('should export multiplyMatrix2x2Matrix2x2', () => {
    expect(glm).toHaveProperty('multiplyMatrix2x2Matrix2x2', multiplyMatrix2x2Matrix2x2)
})
it('should export multiplyMatrix3x3Matrix3x3', () => {
    expect(glm).toHaveProperty('multiplyMatrix3x3Matrix3x3', multiplyMatrix3x3Matrix3x3)
})
it('should export multiplyMatrix4x4Matrix4x4', () => {
    expect(glm).toHaveProperty('multiplyMatrix4x4Matrix4x4', multiplyMatrix4x4Matrix4x4)
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
