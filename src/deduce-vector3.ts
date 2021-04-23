export default function deduceVector3(xyz : Vector3Source) {
    const x =
        'x' in xyz ? xyz.x  :
        'r' in xyz ? xyz.r  :
        0   in xyz ? xyz[0] :
        0
    const y =
        'y' in xyz ? xyz.y  :
        'g' in xyz ? xyz.g  :
        1   in xyz ? xyz[1] :
        0
    const z =
        'z' in xyz ? xyz.z  :
        'b' in xyz ? xyz.b  :
        2   in xyz ? xyz[2] :
        0

    return new Vector3({ x, y, z })
}

import Vector3 from './vector3'
import Vector3Source from './vector3-source'
