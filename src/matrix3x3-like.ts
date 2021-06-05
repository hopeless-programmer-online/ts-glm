type Matrix3x3Like =
    | (
        & ({ x : Vector3Like } | { 0 : Vector3Like })
        & ({ y : Vector3Like } | { 1 : Vector3Like })
        & ({ z : Vector3Like } | { 2 : Vector3Like })
    )
    | [ Vector3Like, Vector3Like, Vector3Like ]

export default Matrix3x3Like

import Vector3Like from './vector3-like'
