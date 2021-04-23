import XComponent from './x-component'
import YComponent from './y-component'

type Vector2Source =
    | XComponent
    | YComponent
    | {}

/**
 * @todo replace with export default when typescript will support it
 */
export { Vector2Source as default }
