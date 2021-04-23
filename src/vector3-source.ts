import XComponent from './x-component'
import YComponent from './y-component'
import ZComponent from './z-component'

type Vector2Source =
    | XComponent
    | YComponent
    | ZComponent
    | {}

/**
 * @todo replace with export default when typescript will support it
 */
export { Vector2Source as default }
