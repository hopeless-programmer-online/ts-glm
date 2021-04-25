export default function multiplyMatrix3Vector3(a : Matrix3, b : Vector3) {
    return vec3(a.rows[0].dot(b), a.rows[1].dot(b), a.rows[2].dot(b))
}

import vec3 from './vec3'
import Vector3 from './vector3'
import Matrix3 from './matrix3'
