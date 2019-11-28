import { as, Block, Cardinal, DECREMENT, isEven, max, min, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../constants'
import { ComputeChildStairsOptionsBoth } from '../types'
import { computeDescentShapedChildStairsByChildCount } from './byChildCount'

const maxChildStairsShouldBeAbleToReachWithinChildCount: (minChildValue: Value, childCount: Cardinal<Block>) => number =
    (minChildValue: Value, childCount: Cardinal<Block>): number =>
        as.number(use.Cardinal(
            minChildValue,
            use.Multiple(
                NEXT_ODD,
                as.Multiple<Cardinal>(as.number(use.Cardinal(
                    childCount,
                    DECREMENT,
                ))),
            ),
        ))

const computeDescentShapedChildStairsByBoth:
    (parentValue: Value, options: { childCount: Cardinal<Block>, minChildValue: Value }) => Block =
    (parentValue: Value, { childCount, minChildValue }: ComputeChildStairsOptionsBoth): Block => {
        if (isEven(minChildValue)) {
            throw new Error(
                `Cannot compute scent-shaped child stairs with an even minimum child value. \
This minimum child value was ${String(minChildValue)}.`,
            )
        }

        const childStairs: Block = computeDescentShapedChildStairsByChildCount(parentValue, childCount)

        if (
            min(...childStairs) < as.number(minChildValue) ||
            max(...childStairs) > maxChildStairsShouldBeAbleToReachWithinChildCount(minChildValue, childCount)
        ) {
            throw new Error(
                `Cannot compute scent-shaped child stairs for parent value ${String(parentValue)}, child count ${String(childCount)}, \
and minimum child value ${String(minChildValue)}.`,
            )
        }

        return childStairs
    }

export {
    computeDescentShapedChildStairsByBoth,
}
