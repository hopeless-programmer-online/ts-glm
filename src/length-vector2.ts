export default function lengthVector2(v : Vector2) {
    return dotVector2Vector2(v, v)**(1/2)
}

import dotVector2Vector2 from './dot-vector2-vector2'
import Vector2 from './vector2'
