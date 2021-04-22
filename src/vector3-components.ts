/**
 * Represents a type that can be accessed as vec2 components.
 */
type Vector3Components =
    | ({ x : number } | { r : number } | { [0] : number })
    | ({ y : number } | { g : number } | { [1] : number })
    | ({ z : number } | { b : number } | { [2] : number })
    | [ number, number, number ]
    | {}

/**
 * @todo replace with export default when typescript will support it
 */
export { Vector3Components as default }
