import XComponent from './x-component'
import YComponent from './y-component'

/**
 * Represents a type that can be accessed as vec2 components.
 */
type Vector2Components =
    | (XComponent & YComponent)
    | [ number, number ]

/**
 * @todo replace with export default when typescript will support it
 */
export { Vector2Components as default }
