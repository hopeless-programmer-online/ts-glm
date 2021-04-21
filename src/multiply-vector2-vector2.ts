import vec2 from './vec2'
import Vector2 from './vector2'

export default function multiplyVector2Vector2(a : Vector2, b : Vector2) {
    return vec2(a.x * b.x, a.y * b.y)
}
