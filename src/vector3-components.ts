import XComponent from './x-component'
import YComponent from './y-component'
import ZComponent from './z-component'

/**
 * Represents a type that can be accessed as vec2 components.
 */
type Vector3Components =
    | (XComponent & YComponent & ZComponent)
    | [ number, number, number ]

/**
 * @todo replace with export default when typescript will support it
 */
export { Vector3Components as default }
