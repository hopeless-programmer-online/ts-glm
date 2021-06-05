type Vector4Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
        & ({ z : number } | { 2 : number })
        & ({ w : number } | { 3 : number })
    )
    | [ number, number, number, number ]

export default Vector4Like
