import { Block, Cardinal, isEven, Value } from '@musical-patterns/utilities'
import { isComputeChildStairsByChildCountOption, isComputeChildStairsByMinChildValueOption } from '../typeGuards'
import { ComputeChildStairsOptions } from '../types'
import { computeWorkoutShapedChildStairsByBoth } from './byBoth'
import { computeWorkoutShapedChildStairsByChildCount } from './byChildCount'
import { computeWorkoutShapedChildStairsByMinChildValue } from './byMinChildValue'

const computeWorkoutShapedChildStairs: (
    parentValue: Value,
    options:
        { childCount: Cardinal<Block> } |
        { minChildValue: Value } |
        { childCount: Cardinal<Block>, minChildValue: Value },
) => Block =
    (parentValue: Value, options: ComputeChildStairsOptions): Block => {
        if (isEven(parentValue)) {
            throw new Error(`Cannot compute workout-shaped child stairs for an even parent value. \
This parent value was ${parentValue}.`)
        }

        if (isComputeChildStairsByChildCountOption(options) && isComputeChildStairsByMinChildValueOption(options)) {
            return computeWorkoutShapedChildStairsByBoth(parentValue, options)
        }
        if (isComputeChildStairsByChildCountOption(options)) {
            return computeWorkoutShapedChildStairsByChildCount(parentValue, options.childCount)
        }

        return computeWorkoutShapedChildStairsByMinChildValue(parentValue, options.minChildValue)
    }

export {
    computeWorkoutShapedChildStairs,
}
