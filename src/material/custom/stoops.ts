import { Block, Cardinal, Value } from '@musical-patterns/utilities'
import { computeBackboneStoop } from './backbone'
import { computeAscentStoop, computeDescentStoop } from './scent'
import { ComputeStoopOptions, StoopType } from './types'

const computeStoop: (
    stoopType: StoopType,
    value: Value,
    options: { length: Cardinal<Block> } | { minimum: Value } | { length: Cardinal<Block>, minimum: Value },
) => Block =
    (stoopType: StoopType, value: Value, options: ComputeStoopOptions): Block => {
        switch (stoopType) {
            case StoopType.ASCENT:
                return computeAscentStoop(value, options)
            case StoopType.DESCENT:
                return computeDescentStoop(value, options)
            case StoopType.BACKBONE:
                return computeBackboneStoop(value, options)
            default:
                throw new Error(`${stoopType} is not a recognized stoop type.`)
        }
    }

export {
    computeStoop,
}
