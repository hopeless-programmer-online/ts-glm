export default function dotVector3Vector3(a : Vector3Components, b : Vector3Components) {
    const va = deduceVector3(a)
    const vb = deduceVector3(b)

    return va.x * vb.x + va.y * vb.y + va.z * vb.z
}

import deduceVector3 from './deduce-vector3'
import Vector3Components from './vector3-components'
