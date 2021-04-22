import { deduceVector3 } from './glm'

it('should deduce from { x, y, z }', () => {
    expect(deduceVector3({ x : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, y, b }', () => {
    expect(deduceVector3({ x : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, y, 2 }', () => {
    expect(deduceVector3({ x : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, g, z }', () => {
    expect(deduceVector3({ x : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, g, b }', () => {
    expect(deduceVector3({ x : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, g, 2 }', () => {
    expect(deduceVector3({ x : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, 1, z }', () => {
    expect(deduceVector3({ x : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, 1, b }', () => {
    expect(deduceVector3({ x : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, 1, 2 }', () => {
    expect(deduceVector3({ x : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, y, z }', () => {
    expect(deduceVector3({ r : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, y, b }', () => {
    expect(deduceVector3({ r : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, y, 2 }', () => {
    expect(deduceVector3({ r : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, g, z }', () => {
    expect(deduceVector3({ r : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, g, b }', () => {
    expect(deduceVector3({ r : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, g, 2 }', () => {
    expect(deduceVector3({ r : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, 1, z }', () => {
    expect(deduceVector3({ r : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, 1, b }', () => {
    expect(deduceVector3({ r : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { r, 1, 2 }', () => {
    expect(deduceVector3({ r : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, y, z }', () => {
    expect(deduceVector3({ 0 : 1, y : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, y, b }', () => {
    expect(deduceVector3({ 0 : 1, y : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, y, 2 }', () => {
    expect(deduceVector3({ 0 : 1, y : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, g, z }', () => {
    expect(deduceVector3({ 0 : 1, g : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, g, b }', () => {
    expect(deduceVector3({ 0 : 1, g : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, g, 2 }', () => {
    expect(deduceVector3({ 0 : 1, g : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, 1, z }', () => {
    expect(deduceVector3({ 0 : 1, 1 : 2, z : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, 1, b }', () => {
    expect(deduceVector3({ 0 : 1, 1 : 2, b : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { 0, 1, 2 }', () => {
    expect(deduceVector3({ 0 : 1, 1 : 2, 2 : 3 })).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from { x, y }', () => {
    expect(deduceVector3({ x : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { x, g }', () => {
    expect(deduceVector3({ x : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { x, 1 }', () => {
    expect(deduceVector3({ x : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { r, y }', () => {
    expect(deduceVector3({ r : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { r, g }', () => {
    expect(deduceVector3({ r : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { r, 1 }', () => {
    expect(deduceVector3({ r : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { 0, y }', () => {
    expect(deduceVector3({ 0 : 1, y : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { 0, g }', () => {
    expect(deduceVector3({ 0 : 1, g : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { 0, 1 }', () => {
    expect(deduceVector3({ 0 : 1, 1 : 2 })).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from { x, z }', () => {
    expect(deduceVector3({ x : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { x, b }', () => {
    expect(deduceVector3({ x : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { x, 2 }', () => {
    expect(deduceVector3({ x : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { r, z }', () => {
    expect(deduceVector3({ r : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { r, b }', () => {
    expect(deduceVector3({ r : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { r, 2 }', () => {
    expect(deduceVector3({ r : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { 0, z }', () => {
    expect(deduceVector3({ 0 : 1, z : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { 0, b }', () => {
    expect(deduceVector3({ 0 : 1, b : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { 0, 2 }', () => {
    expect(deduceVector3({ 0 : 1, 2 : 3 })).toMatchObject({ x : 1, y : 0, z : 3 })
})
it('should deduce from { y, z }', () => {
    expect(deduceVector3({ y : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { y, b }', () => {
    expect(deduceVector3({ y : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { y, 2 }', () => {
    expect(deduceVector3({ y : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { g, z }', () => {
    expect(deduceVector3({ g : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { g, b }', () => {
    expect(deduceVector3({ g : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { g, 2 }', () => {
    expect(deduceVector3({ g : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { 1, z }', () => {
    expect(deduceVector3({ 1 : 2, z : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { 1, b }', () => {
    expect(deduceVector3({ 1 : 2, b : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { 1, 2 }', () => {
    expect(deduceVector3({ 1 : 2, 2 : 3 })).toMatchObject({ x : 0, y : 2, z : 3 })
})
it('should deduce from { x }', () => {
    expect(deduceVector3({ x : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
})
it('should deduce from { r }', () => {
    expect(deduceVector3({ r : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
})
it('should deduce from { 0 }', () => {
    expect(deduceVector3({ 0 : 1 })).toMatchObject({ x : 1, y : 0, z : 0 })
})
it('should deduce from { y }', () => {
    expect(deduceVector3({ y : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
})
it('should deduce from { g }', () => {
    expect(deduceVector3({ g : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
})
it('should deduce from { 1 }', () => {
    expect(deduceVector3({ 1 : 2 })).toMatchObject({ x : 0, y : 2, z : 0 })
})
it('should deduce from { z }', () => {
    expect(deduceVector3({ z : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
})
it('should deduce from { b }', () => {
    expect(deduceVector3({ b : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
})
it('should deduce from { 2 }', () => {
    expect(deduceVector3({ 2 : 3 })).toMatchObject({ x : 0, y : 0, z : 3 })
})
it('should deduce from [ number, number, number ]', () => {
    expect(deduceVector3([ 1, 2, 3 ])).toMatchObject({ x : 1, y : 2, z : 3 })
})
it('should deduce from [ number, number ]', () => {
    expect(deduceVector3([ 1, 2 ])).toMatchObject({ x : 1, y : 2, z : 0 })
})
it('should deduce from [ number ]', () => {
    expect(deduceVector3([ 1 ])).toMatchObject({ x : 1, y : 0, z : 0 })
})