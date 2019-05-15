import { Block, Cardinal, computeReverse, Value } from '@musical-patterns/utilities'
import { ComputeChildStairsOptions } from '../types'
import { computeDescentShapedChildStairs } from './descents'

const computeAscentShapedChildStairs: (
    parentValue: Value,
    options:
        { childCount: Cardinal<Block> } |
        { minChildValue: Value } |
        { childCount: Cardinal<Block>, minChildValue: Value },
) => Block =
    (parentValue: Value, options: ComputeChildStairsOptions): Block =>
        computeReverse(computeDescentShapedChildStairs(parentValue, options))

export {
    computeAscentShapedChildStairs,
}
