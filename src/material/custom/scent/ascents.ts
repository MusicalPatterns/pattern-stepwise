import { Block, Cardinal, reverse, Value } from '@musical-patterns/utilities'
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
        reverse(computeDescentShapedChildStairs(parentValue, options))

export {
    computeAscentShapedChildStairs,
}
