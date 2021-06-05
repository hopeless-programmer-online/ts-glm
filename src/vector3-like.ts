type Vector3Like =
    | (
        & ({ x : number } | { 0 : number })
        & ({ y : number } | { 1 : number })
        & ({ z : number } | { 2 : number })
    )
    | [ number, number, number ]

export default Vector3Like
