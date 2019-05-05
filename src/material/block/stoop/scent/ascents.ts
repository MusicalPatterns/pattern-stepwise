import { Block, Cardinal, reverse, Value } from '@musical-patterns/utilities'
import { ComputeStoopOptions } from '../types'
import { computeDescentStoop } from './descents'

const computeAscentStoop: (
    value: Value,
    options: { length: Cardinal<Block> } | { minimum: Value } | { length: Cardinal<Block>, minimum: Value },
) => Block =
    (value: Value, options: ComputeStoopOptions): Block =>
        reverse(computeDescentStoop(value, options))

export {
    computeAscentStoop,
}
