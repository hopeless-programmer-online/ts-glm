/**
 * Represents a type that can be accessed as vec2 components.
 */
export type Vector2Components =
    | (
        & ({ x : number } | { r : number } | { [0] : number })
        & ({ y : number } | { g : number } | { [1] : number })
    )
    | number[]

/**
 * @todo replace with export default when typescript will support it
 */
