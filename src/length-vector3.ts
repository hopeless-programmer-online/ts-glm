export default function lengthVector3(v : Vector3) {
    return dotVector3Vector3(v, v)**(1/2)
}

import dotVector3Vector3 from './dot-vector3-vector3'
import Vector3 from './vector3'
