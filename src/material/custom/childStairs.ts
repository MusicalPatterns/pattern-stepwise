import { Block, Cardinal, Value } from '@musical-patterns/utilities'
import { computeAscentShapedChildStairs, computeDescentShapedChildStairs } from './scent'
import { ChildStairsShape, ComputeChildStairsOptions } from './types'
import { computeWorkoutShapedChildStairs } from './workout'

const computeChildStairs: (
    childStairsShape: ChildStairsShape,
    parentValue: Value,
    options:
        { childCount: Cardinal<Block> } |
        { minChildValue: Value } |
        { childCount: Cardinal<Block>, minChildValue: Value },
) => Block =
    (childStairsShape: ChildStairsShape, parentValue: Value, options: ComputeChildStairsOptions): Block => {
        switch (childStairsShape) {
            case ChildStairsShape.ASCENT:
                return computeAscentShapedChildStairs(parentValue, options)
            case ChildStairsShape.DESCENT:
                return computeDescentShapedChildStairs(parentValue, options)
            case ChildStairsShape.WORKOUT:
                return computeWorkoutShapedChildStairs(parentValue, options)
            default:
                throw new Error(`${childStairsShape} is not a recognized child stairs shape.`)
        }
    }

export {
    computeChildStairs,
}
