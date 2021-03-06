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

import matrix3x3FromMatrix2x2 from './matrix3x3-from-matrix2x2'
import matrix4x4FromMatrix2x2 from './matrix4x4-from-matrix2x2'
import matrix4x4FromMatrix3x3 from './matrix4x4-from-matrix3x3'

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

import translate from './translate'

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
it('should export matrix3x3FromMatrix2x2', () => {
    expect(glm).toHaveProperty('matrix3x3FromMatrix2x2', matrix3x3FromMatrix2x2)
})
it('should export matrix4x4FromMatrix2x2', () => {
    expect(glm).toHaveProperty('matrix4x4FromMatrix2x2', matrix4x4FromMatrix2x2)
})
it('should export matrix4x4FromMatrix3x3', () => {
    expect(glm).toHaveProperty('matrix4x4FromMatrix3x3', matrix4x4FromMatrix3x3)
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
it('should export translate', () => {
    expect(glm).toHaveProperty('translate', translate)
})

import addNumberVector2 from './add-number-vector2'

it('should export addNumberVector2', () => {
    expect(glm).toHaveProperty('addNumberVector2', addNumberVector2)
})

import addVector2Number from './add-vector2-number'

it('should export addVector2Number', () => {
    expect(glm).toHaveProperty('addVector2Number', addVector2Number)
})

import addNumberVector3 from './add-number-vector3'

it('should export addNumberVector3', () => {
    expect(glm).toHaveProperty('addNumberVector3', addNumberVector3)
})

import addVector3Number from './add-vector3-number'

it('should export addVector3Number', () => {
    expect(glm).toHaveProperty('addVector3Number', addVector3Number)
})

import addNumberVector4 from './add-number-vector4'

it('should export addNumberVector4', () => {
    expect(glm).toHaveProperty('addNumberVector4', addNumberVector4)
})

import addVector4Number from './add-vector4-number'

it('should export addVector4Number', () => {
    expect(glm).toHaveProperty('addVector4Number', addVector4Number)
})

import subtractNumberVector2 from './subtract-number-vector2'

it('should export subtractNumberVector2', () => {
    expect(glm).toHaveProperty('subtractNumberVector2', subtractNumberVector2)
})

import subtractVector2Number from './subtract-vector2-number'

it('should export subtractVector2Number', () => {
    expect(glm).toHaveProperty('subtractVector2Number', subtractVector2Number)
})

import subtractNumberVector3 from './subtract-number-vector3'

it('should export subtractNumberVector3', () => {
    expect(glm).toHaveProperty('subtractNumberVector3', subtractNumberVector3)
})

import subtractVector3Number from './subtract-vector3-number'

it('should export subtractVector3Number', () => {
    expect(glm).toHaveProperty('subtractVector3Number', subtractVector3Number)
})

import subtractNumberVector4 from './subtract-number-vector4'

it('should export subtractNumberVector4', () => {
    expect(glm).toHaveProperty('subtractNumberVector4', subtractNumberVector4)
})

import subtractVector4Number from './subtract-vector4-number'

it('should export subtractVector4Number', () => {
    expect(glm).toHaveProperty('subtractVector4Number', subtractVector4Number)
})

import multiplyNumberVector2 from './multiply-number-vector2'

it('should export multiplyNumberVector2', () => {
    expect(glm).toHaveProperty('multiplyNumberVector2', multiplyNumberVector2)
})

import multiplyVector2Number from './multiply-vector2-number'

it('should export multiplyVector2Number', () => {
    expect(glm).toHaveProperty('multiplyVector2Number', multiplyVector2Number)
})

import multiplyNumberVector3 from './multiply-number-vector3'

it('should export multiplyNumberVector3', () => {
    expect(glm).toHaveProperty('multiplyNumberVector3', multiplyNumberVector3)
})

import multiplyVector3Number from './multiply-vector3-number'

it('should export multiplyVector3Number', () => {
    expect(glm).toHaveProperty('multiplyVector3Number', multiplyVector3Number)
})

import multiplyNumberVector4 from './multiply-number-vector4'

it('should export multiplyNumberVector4', () => {
    expect(glm).toHaveProperty('multiplyNumberVector4', multiplyNumberVector4)
})

import multiplyVector4Number from './multiply-vector4-number'

it('should export multiplyVector4Number', () => {
    expect(glm).toHaveProperty('multiplyVector4Number', multiplyVector4Number)
})

import divideNumberVector2 from './divide-number-vector2'

it('should export divideNumberVector2', () => {
    expect(glm).toHaveProperty('divideNumberVector2', divideNumberVector2)
})

import divideVector2Number from './divide-vector2-number'

it('should export divideVector2Number', () => {
    expect(glm).toHaveProperty('divideVector2Number', divideVector2Number)
})

import divideNumberVector3 from './divide-number-vector3'

it('should export divideNumberVector3', () => {
    expect(glm).toHaveProperty('divideNumberVector3', divideNumberVector3)
})

import divideVector3Number from './divide-vector3-number'

it('should export divideVector3Number', () => {
    expect(glm).toHaveProperty('divideVector3Number', divideVector3Number)
})

import divideNumberVector4 from './divide-number-vector4'

it('should export divideNumberVector4', () => {
    expect(glm).toHaveProperty('divideNumberVector4', divideNumberVector4)
})

import divideVector4Number from './divide-vector4-number'

it('should export divideVector4Number', () => {
    expect(glm).toHaveProperty('divideVector4Number', divideVector4Number)
})

import addNumberMatrix2x2 from './add-number-matrix2x2'

it('should export addNumberMatrix2x2', () => {
    expect(glm).toHaveProperty('addNumberMatrix2x2', addNumberMatrix2x2)
})

import addMatrix2x2Number from './add-matrix2x2-number'

it('should export addMatrix2x2Number', () => {
    expect(glm).toHaveProperty('addMatrix2x2Number', addMatrix2x2Number)
})

import addNumberMatrix3x3 from './add-number-matrix3x3'

it('should export addNumberMatrix3x3', () => {
    expect(glm).toHaveProperty('addNumberMatrix3x3', addNumberMatrix3x3)
})

import addMatrix3x3Number from './add-matrix3x3-number'

it('should export addMatrix3x3Number', () => {
    expect(glm).toHaveProperty('addMatrix3x3Number', addMatrix3x3Number)
})

import addNumberMatrix4x4 from './add-number-matrix4x4'

it('should export addNumberMatrix4x4', () => {
    expect(glm).toHaveProperty('addNumberMatrix4x4', addNumberMatrix4x4)
})

import addMatrix4x4Number from './add-matrix4x4-number'

it('should export addMatrix4x4Number', () => {
    expect(glm).toHaveProperty('addMatrix4x4Number', addMatrix4x4Number)
})

import subtractNumberMatrix2x2 from './subtract-number-matrix2x2'

it('should export subtractNumberMatrix2x2', () => {
    expect(glm).toHaveProperty('subtractNumberMatrix2x2', subtractNumberMatrix2x2)
})

import subtractMatrix2x2Number from './subtract-matrix2x2-number'

it('should export subtractMatrix2x2Number', () => {
    expect(glm).toHaveProperty('subtractMatrix2x2Number', subtractMatrix2x2Number)
})

import subtractNumberMatrix3x3 from './subtract-number-matrix3x3'

it('should export subtractNumberMatrix3x3', () => {
    expect(glm).toHaveProperty('subtractNumberMatrix3x3', subtractNumberMatrix3x3)
})

import subtractMatrix3x3Number from './subtract-matrix3x3-number'

it('should export subtractMatrix3x3Number', () => {
    expect(glm).toHaveProperty('subtractMatrix3x3Number', subtractMatrix3x3Number)
})

import subtractNumberMatrix4x4 from './subtract-number-matrix4x4'

it('should export subtractNumberMatrix4x4', () => {
    expect(glm).toHaveProperty('subtractNumberMatrix4x4', subtractNumberMatrix4x4)
})

import subtractMatrix4x4Number from './subtract-matrix4x4-number'

it('should export subtractMatrix4x4Number', () => {
    expect(glm).toHaveProperty('subtractMatrix4x4Number', subtractMatrix4x4Number)
})

import multiplyNumberMatrix2x2 from './multiply-number-matrix2x2'

it('should export multiplyNumberMatrix2x2', () => {
    expect(glm).toHaveProperty('multiplyNumberMatrix2x2', multiplyNumberMatrix2x2)
})

import multiplyMatrix2x2Number from './multiply-matrix2x2-number'

it('should export multiplyMatrix2x2Number', () => {
    expect(glm).toHaveProperty('multiplyMatrix2x2Number', multiplyMatrix2x2Number)
})

import multiplyNumberMatrix3x3 from './multiply-number-matrix3x3'

it('should export multiplyNumberMatrix3x3', () => {
    expect(glm).toHaveProperty('multiplyNumberMatrix3x3', multiplyNumberMatrix3x3)
})

import multiplyMatrix3x3Number from './multiply-matrix3x3-number'

it('should export multiplyMatrix3x3Number', () => {
    expect(glm).toHaveProperty('multiplyMatrix3x3Number', multiplyMatrix3x3Number)
})

import multiplyNumberMatrix4x4 from './multiply-number-matrix4x4'

it('should export multiplyNumberMatrix4x4', () => {
    expect(glm).toHaveProperty('multiplyNumberMatrix4x4', multiplyNumberMatrix4x4)
})

import multiplyMatrix4x4Number from './multiply-matrix4x4-number'

it('should export multiplyMatrix4x4Number', () => {
    expect(glm).toHaveProperty('multiplyMatrix4x4Number', multiplyMatrix4x4Number)
})

import divideNumberMatrix2x2 from './divide-number-matrix2x2'

it('should export divideNumberMatrix2x2', () => {
    expect(glm).toHaveProperty('divideNumberMatrix2x2', divideNumberMatrix2x2)
})

import divideMatrix2x2Number from './divide-matrix2x2-number'

it('should export divideMatrix2x2Number', () => {
    expect(glm).toHaveProperty('divideMatrix2x2Number', divideMatrix2x2Number)
})

import divideNumberMatrix3x3 from './divide-number-matrix3x3'

it('should export divideNumberMatrix3x3', () => {
    expect(glm).toHaveProperty('divideNumberMatrix3x3', divideNumberMatrix3x3)
})

import divideMatrix3x3Number from './divide-matrix3x3-number'

it('should export divideMatrix3x3Number', () => {
    expect(glm).toHaveProperty('divideMatrix3x3Number', divideMatrix3x3Number)
})

import divideNumberMatrix4x4 from './divide-number-matrix4x4'

it('should export divideNumberMatrix4x4', () => {
    expect(glm).toHaveProperty('divideNumberMatrix4x4', divideNumberMatrix4x4)
})

import divideMatrix4x4Number from './divide-matrix4x4-number'

it('should export divideMatrix4x4Number', () => {
    expect(glm).toHaveProperty('divideMatrix4x4Number', divideMatrix4x4Number)
})
