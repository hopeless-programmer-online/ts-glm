export default function addVector3Number(a : Vector3Components, b : number) {
    const { x, y, z } = deduceVector3(a)

    return new Vector3({ x : x + b, y : y + b, z : z + b })
}

import Vector3 from './vector3'
import Vector3Components from './vector3-components'
import deduceVector3 from './deduce-vector3'
