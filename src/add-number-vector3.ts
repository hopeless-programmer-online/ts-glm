export default function addNumberVector3(a : number, b : Vector3Components) {
    const { x, y, z } = deduceVector3(b)

    return new Vector3({ x : a + x, y : a + y, z : a + z })
}

import Vector3 from './vector3'
import Vector3Components from './vector3-components'
import deduceVector3 from './deduce-vector3'
