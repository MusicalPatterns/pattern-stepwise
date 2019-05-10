import {
    as,
    Block,
    Cycle,
    dividesEvenly,
    INCREMENT,
    isEven,
    musicalAs,
    negative,
    Ordinal,
    use,
    Value,
} from '@musical-patterns/utilities'
import {
    INDEX_OF_THE_BIGGER_WORKOUT_CYCLE_ELEMENT,
    INDEX_OF_THE_SMALLER_WORKOUT_CYCLE_ELEMENT,
    NEXT_ODD,
    TWO_ODDS,
} from '../constants'

const computeInitialWorkoutCycleIndexForWorkoutShapedChildStairsByMinChildValue:
    (parentValue: Value, workoutCycle: Cycle) => Ordinal<Cycle> =
    (parentValue: Value, workoutCycle: Cycle): Ordinal<Cycle> =>
        dividesEvenly(
            use.Cardinal(
                parentValue,
                as.Cardinal<Value>(negative(use.Ordinal(
                    workoutCycle,
                    INDEX_OF_THE_BIGGER_WORKOUT_CYCLE_ELEMENT,
                ))),
            ),
            TWO_ODDS,
        ) ?
            INDEX_OF_THE_BIGGER_WORKOUT_CYCLE_ELEMENT :
            INDEX_OF_THE_SMALLER_WORKOUT_CYCLE_ELEMENT

const computeWorkoutShapedChildStairsByMinChildValue: (parentValue: Value, minChildValue: Value) => Block =
    (parentValue: Value, minChildValue: Value): Block => {
        if (isEven(minChildValue)) {
            throw new Error(
                `Cannot compute workout-shaped child stairs with an even minimum child value. \
This minimum child value was ${minChildValue}.`,
            )
        }

        const childStairs: Block = as.Block([])
        const workoutCycle: Cycle = as.Cycle([
            minChildValue,
            use.Cardinal(minChildValue, NEXT_ODD),
        ])

        let totalChildStairsValue: Value = musicalAs.Value(0)
        let index: Ordinal<Cycle> =
            computeInitialWorkoutCycleIndexForWorkoutShapedChildStairsByMinChildValue(parentValue, workoutCycle)

        while (totalChildStairsValue < parentValue) {
            const nextElement: number = use.Ordinal(workoutCycle, index)
            childStairs.push(nextElement)
            totalChildStairsValue = use.Cardinal(totalChildStairsValue, as.Cardinal<Value>(nextElement))
            index = use.Cardinal(index, INCREMENT)
        }

        if (totalChildStairsValue > parentValue) {
            throw new Error(
                `Cannot compute workout-shaped child stairs for parent value ${parentValue} \
and minimum child value ${minChildValue}.`,
            )
        }

        return childStairs
    }

export {
    computeWorkoutShapedChildStairsByMinChildValue,
}
