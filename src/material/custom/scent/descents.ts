import { Block, Cardinal, isEven, Value } from '@musical-patterns/utilities'
import { isComputeChildStairsByChildCountOption, isComputeChildStairsByMinChildValueOption } from '../typeGuards'
import { ComputeChildStairsOptions } from '../types'
import { computeDescentShapedChildStairsByBoth } from './byBoth'
import { computeDescentShapedChildStairsByChildCount } from './byChildCount'
import { computeDescentShapedChildStairsByMinChildValue } from './byMinChildValue'

const computeDescentShapedChildStairs: (
    parentValue: Value,
    options:
        { childCount: Cardinal<Block> } |
        { minChildValue: Value } |
        { childCount: Cardinal<Block>, minChildValue: Value },
) => Block =
    (parentValue: Value, options: ComputeChildStairsOptions): Block => {
        if (isEven(parentValue)) {
            throw new Error(
                `Cannot compute scent-shaped child stairs for an even parent value. \
This parent value was ${String(parentValue)}.`,
            )
        }

        if (isComputeChildStairsByChildCountOption(options) && isComputeChildStairsByMinChildValueOption(options)) {
            return computeDescentShapedChildStairsByBoth(parentValue, options)
        }
        if (isComputeChildStairsByChildCountOption(options)) {
            return computeDescentShapedChildStairsByChildCount(parentValue, options.childCount)
        }

        return computeDescentShapedChildStairsByMinChildValue(parentValue, options.minChildValue)
    }

export {
    computeDescentShapedChildStairs,
}
