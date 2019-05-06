import { as, Block, Cardinal, DECREMENT, isEven, max, min, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../constants'
import { ComputeStoopOptionsBoth } from '../types'
import { computeDescentStoopByLength } from './byLength'

const maxStoopShouldReachByLength: (minimum: Value, length: Cardinal<Block>) => number =
    (minimum: Value, length: Cardinal<Block>): number =>
        as.number(use.Cardinal(
            minimum,
            use.Multiple(
                NEXT_ODD,
                as.Multiple<Cardinal>(as.number(use.Cardinal(
                    length,
                    DECREMENT,
                ))),
            ),
        ))

const computeDescentStoopByBoth: (value: Value, options: { length: Cardinal<Block>, minimum: Value }) => Block =
    (value: Value, { length, minimum }: ComputeStoopOptionsBoth): Block => {
        if (isEven(minimum)) {
            throw new Error(
                `Cannot compute a scent stoop with an even minimum. This minimum was ${minimum}.`,
            )
        }

        const stoop: Block = computeDescentStoopByLength(value, length)

        if (
            min(...stoop) < as.number(minimum) ||
            max(...stoop) > maxStoopShouldReachByLength(minimum, length)
        ) {
            throw new Error(
                `Cannot compute a scent stoop for value ${value}, length ${length}, and minimum ${minimum}.`,
            )
        }

        return stoop
    }

export {
    computeDescentStoopByBoth,
}
