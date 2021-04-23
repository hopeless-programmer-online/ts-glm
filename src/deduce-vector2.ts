import Vector2 from './vector2'
import Vector2Source from './vector2-source'

export default function deduceVector2(xy : Vector2Source) {
    const x =
        'x' in xy ? xy.x  :
        'r' in xy ? xy.r  :
        0   in xy ? xy[0] :
        0
    const y =
        'y' in xy ? xy.y  :
        'g' in xy ? xy.g  :
        1   in xy ? xy[1] :
        0

    return new Vector2({ x, y })
}
