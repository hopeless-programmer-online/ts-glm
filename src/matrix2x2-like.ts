type Matrix2x2Like =
    | (
        & ({ x : Vector2Like } | { 0 : Vector2Like })
        & ({ y : Vector2Like } | { 1 : Vector2Like })
    )
    | [ Vector2Like, Vector2Like ]

export default Matrix2x2Like

import Vector2Like from './vector2-like'
