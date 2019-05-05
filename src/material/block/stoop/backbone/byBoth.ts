import { as, Block, Cardinal, isEven, max, min, use, Value } from '@musical-patterns/utilities'
import { NEXT_ODD } from '../../constants'
import { ComputeStoopOptionsBoth } from '../types'
import { computeBackboneStoopByLength } from './byLength'

const computeBackboneStoopByBoth: (value: Value, options: { length: Cardinal<Block>, minimum: Value }) => Block =
    (value: Value, { length, minimum }: ComputeStoopOptionsBoth): Block => {
        if (isEven(minimum)) {
            throw new Error(
                `Cannot compute a backbone stoop with an even minimum. This minimum was ${minimum}.`,
            )
        }

        const stoop: Block = computeBackboneStoopByLength(value, length)

        if (min(...stoop) < as.number(minimum) || max(...stoop) > as.number(use.Cardinal(minimum, NEXT_ODD))) {
            throw new Error(
                `Cannot compute a backbone stoop for value ${value}, length ${length}, and minimum ${minimum}.`,
            )
        }

        return stoop
    }

export {
    computeBackboneStoopByBoth,
}
