import { Block, Cardinal, isEven, Value } from '@musical-patterns/utilities'
import { isComputeStoopByLengthOption, isComputeStoopByMinimumOption } from '../typeGuards'
import { ComputeStoopOptions } from '../types'
import { computeBackboneStoopByBoth } from './byBoth'
import { computeBackboneStoopByLength } from './byLength'
import { computeBackboneStoopByMinimum } from './byMinimum'

const computeBackboneStoop: (
    value: Value,
    options: { length: Cardinal<Block> } | { minimum: Value } | { length: Cardinal<Block>, minimum: Value },
) => Block =
    (value: Value, options: ComputeStoopOptions): Block => {
        if (isEven(value)) {
            throw new Error(`Cannot compute a backbone stoop for an even value. This value was ${value}.`)
        }

        if (isComputeStoopByLengthOption(options) && isComputeStoopByMinimumOption(options)) {
            return computeBackboneStoopByBoth(value, options)
        }
        if (isComputeStoopByLengthOption(options)) {
            return computeBackboneStoopByLength(value, options.length)
        }

        return computeBackboneStoopByMinimum(value, options.minimum)
    }

export {
    computeBackboneStoop,
}
