import { Block, Cardinal, isEven, Value } from '@musical-patterns/utilities'
import { isComputeStoopByLengthOption, isComputeStoopByMinimumOption } from '../typeGuards'
import { ComputeStoopOptions } from '../types'
import { computeDescentStoopByBoth } from './byBoth'
import { computeDescentStoopByLength } from './byLength'
import { computeDescentStoopByMinimum } from './byMinimum'

const computeDescentStoop: (
    value: Value,
    options: { length: Cardinal<Block> } | { minimum: Value } | { length: Cardinal<Block>, minimum: Value },
) => Block =
    (value: Value, options: ComputeStoopOptions): Block => {
        if (isEven(value)) {
            throw new Error(`Cannot compute a scent stoop for an even value. This value was ${value}.`)
        }

        if (isComputeStoopByLengthOption(options) && isComputeStoopByMinimumOption(options)) {
            return computeDescentStoopByBoth(value, options)
        }
        if (isComputeStoopByLengthOption(options)) {
            return computeDescentStoopByLength(value, options.length)
        }

        return computeDescentStoopByMinimum(value, options.minimum)
    }

export {
    computeDescentStoop,
}
