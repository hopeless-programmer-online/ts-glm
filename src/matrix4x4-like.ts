type Matrix4x4Like =
    | (
        & ({ x : Vector4Like } | { 0 : Vector4Like })
        & ({ y : Vector4Like } | { 1 : Vector4Like })
        & ({ z : Vector4Like } | { 2 : Vector4Like })
        & ({ w : Vector4Like } | { 3 : Vector4Like })
    )
    | [ Vector4Like, Vector4Like, Vector4Like, Vector4Like ]

export default Matrix4x4Like

import Vector4Like from './vector4-like'
