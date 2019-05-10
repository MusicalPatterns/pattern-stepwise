import { as, Block, Cardinal, isEven, max, min, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../constants'
import { ComputeChildStairsOptionsBoth } from '../types'
import { computeWorkoutShapedChildStairsByChildCount } from './byChildCount'
import { computeWorkoutShapedChildStairsByMinChildValue } from './byMinChildValue'

const checkForErrorsDoingItOneWayOrTheOtherBeforeEvenTryingWithBothOptions:
    (parentValue: Value, options: { childCount: Cardinal<Block>, minChildValue: Value }) => void =
    (parentValue: Value, { childCount, minChildValue }: ComputeChildStairsOptionsBoth): void => {
        try {
            computeWorkoutShapedChildStairsByMinChildValue(parentValue, minChildValue)
        }
        catch (byMinChildValueError) {
            let byChildCountErrorOccurred: boolean = false
            try {
                computeWorkoutShapedChildStairsByChildCount(parentValue, childCount)
            }
            catch (byChildCountError) {
                byChildCountErrorOccurred = true
            }

            throw byChildCountErrorOccurred ?
                new Error(
                    `Cannot compute workout-shaped child stairs for either parent value ${parentValue} \
and child count ${childCount} or for parent value ${parentValue} and minimum child value ${minChildValue}, \
let alone parent value ${parentValue}, child count ${childCount}, and minimum child value ${minChildValue}.`,
                ) :
                byMinChildValueError
        }
    }

const computeWorkoutShapedChildStairsByBoth:
    (parentValue: Value, options: { childCount: Cardinal<Block>, minChildValue: Value }) => Block =
    (parentValue: Value, { childCount, minChildValue }: ComputeChildStairsOptionsBoth): Block => {
        if (isEven(minChildValue)) {
            throw new Error(
                `Cannot compute workout-shaped child stairs with an even minimum child value. \
This minimum child value was ${minChildValue}.`,
            )
        }

        checkForErrorsDoingItOneWayOrTheOtherBeforeEvenTryingWithBothOptions(parentValue, { childCount, minChildValue })

        const childStairs: Block = computeWorkoutShapedChildStairsByChildCount(parentValue, childCount)

        if (
            min(...childStairs) < as.number(minChildValue) ||
            max(...childStairs) > as.number(use.Cardinal(minChildValue, NEXT_ODD))
        ) {
            throw new Error(
                `Cannot compute workout-shaped child stairs for parent value ${parentValue}, \
child count ${childCount}, and minimum child value ${minChildValue}.`,
            )
        }

        return childStairs
    }

export {
    computeWorkoutShapedChildStairsByBoth,
}
