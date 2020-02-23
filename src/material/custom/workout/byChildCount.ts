import {
    as,
    Block,
    Cardinal,
    DECREMENT,
    INCREMENT,
    integerDivide,
    isEven,
    isOdd,
    map,
    min,
    musicalAs,
    Ordinal,
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
This child count was ${String(childCount)}.`,
            )
        }

        const childStairs: Block = as.Block([])

        const basisChildValue: Value = musicalAs.Value(integerDivide(as.number(parentValue), as.number(childCount)))
        const basisChildStairs: Value[] = repeat([ basisChildValue ], as.Cardinal<Value[]>(as.number(childCount)))

        if (isOdd(basisChildValue)) {
            childStairs.push(...map(basisChildStairs, (basisChildStair: Value, index: Ordinal<Value[]>): number => {
                if (isOdd(index)) {
                    return use.Cardinal(basisChildStair, NEXT_ODD)
                }

                return as.number(basisChildStair)
            }))
        }
        else {
            childStairs.push(...map(basisChildStairs, (basisChildStair: Value, index: Ordinal<Value[]>): number => {
                if (isEven(index)) {
                    return use.Cardinal(basisChildStair, INCREMENT)
                }

                return use.Cardinal(basisChildStair, DECREMENT)
            }))
        }

        if (sum(...childStairs) !== as.number(parentValue) || min(...childStairs) < 1) {
            throw new Error(
                `Cannot compute workout-shaped child stairs for parent value ${String(parentValue)} \
and child count ${String(childCount)}.`,
            )
        }

        return childStairs
    }

export {
    computeWorkoutShapedChildStairsByChildCount,
}
