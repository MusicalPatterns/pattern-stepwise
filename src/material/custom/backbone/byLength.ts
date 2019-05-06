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

const computeBackboneStoopByLength: (value: Value, length: Cardinal<Block>) => Block =
    (value: Value, length: Cardinal<Block>): Block => {
        if (isEven(length)) {
            throw new Error(
                `Cannot compute a backbone stoop with an even length. This length was ${length}.`,
            )
        }

        const stoop: Block = as.Block([])

        const basisValue: Value = musicalAs.Value(floor(quotient(as.number(value), as.number(length))))
        const basisStoop: Value[] = repeat([ basisValue ], as.Cardinal<Value[]>(as.number(length)))

        if (isOdd(basisValue)) {
            stoop.push(...map(basisStoop, (basisStoopElement: Value, index: Ordinal<Value[]>) => {
                if (isOdd(index)) {
                    return use.Cardinal(basisStoopElement, NEXT_ODD)
                }

                return basisStoopElement
            }))
        }
        else {
            stoop.push(...map(basisStoop, (basisStoopElement: Value, index: Ordinal<Value[]>) => {
                if (isEven(index)) {
                    return use.Cardinal(basisStoopElement, INCREMENT)
                }

                return use.Cardinal(basisStoopElement, DECREMENT)
            }))
        }

        if (sum(...stoop) !== as.number(value) || min(...stoop) < 1) {
            throw new Error(`Cannot compute a backbone stoop for value ${value} and length ${length}.`)
        }

        return stoop
    }

export {
    computeBackboneStoopByLength,
}
