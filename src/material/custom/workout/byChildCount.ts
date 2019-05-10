import {
    as,
    Block,
    Cardinal,
    DECREMENT,
    floor,
    INCREMENT,
    isEven,
    isOdd,
    map,
    min,
    musicalAs,
    Ordinal,
    quotient,
    repeat,
    sum,
    use,
    Value,
} from '@musical-patterns/utilities'
import { NEXT_ODD } from '../constants'

const computeWorkoutShapedChildStairsByChildCount: (parentValue: Value, childCount: Cardinal<Block>) => Block =
    (parentValue: Value, childCount: Cardinal<Block>): Block => {
        if (isEven(childCount)) {
            throw new Error(
                `Cannot compute workout-shaped child stairs with an even child count. \
This child count was ${childCount}.`,
            )
        }

        const childStairs: Block = as.Block([])

        const basisChildValue: Value = musicalAs.Value(floor(quotient(as.number(parentValue), as.number(childCount))))
        const basisChildStairs: Value[] = repeat([ basisChildValue ], as.Cardinal<Value[]>(as.number(childCount)))

        if (isOdd(basisChildValue)) {
            childStairs.push(...map(basisChildStairs, (basisChildStair: Value, index: Ordinal<Value[]>) => {
                if (isOdd(index)) {
                    return use.Cardinal(basisChildStair, NEXT_ODD)
                }

                return basisChildStair
            }))
        }
        else {
            childStairs.push(...map(basisChildStairs, (basisChildStair: Value, index: Ordinal<Value[]>) => {
                if (isEven(index)) {
                    return use.Cardinal(basisChildStair, INCREMENT)
                }

                return use.Cardinal(basisChildStair, DECREMENT)
            }))
        }

        if (sum(...childStairs) !== as.number(parentValue) || min(...childStairs) < 1) {
            throw new Error(
                `Cannot compute workout-shaped child stairs for parent value ${parentValue} \
and child count ${childCount}.`,
            )
        }

        return childStairs
    }

export {
    computeWorkoutShapedChildStairsByChildCount,
}
