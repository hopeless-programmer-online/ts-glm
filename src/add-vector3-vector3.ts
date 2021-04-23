export default function addVector3Vector3(a : Vector3Components, b : Vector3Components) {
    const va = deduceVector3(a)
    const vb = deduceVector3(b)

    return new Vector3({ x : va.x + vb.x, y : va.y + vb.y, z : va.z + vb.z })
}

import Vector3 from './vector3'
import Vector3Components from './vector3-components'
import deduceVector3 from './deduce-vector3'
