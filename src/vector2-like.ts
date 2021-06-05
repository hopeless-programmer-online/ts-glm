type Vector2Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
    )
    | [ number, number ]

export default Vector2Like
