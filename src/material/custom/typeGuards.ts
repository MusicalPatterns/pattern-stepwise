import { isUndefined } from '@musical-patterns/utilities'
import {
    ComputeChildStairsByChildCountOption,
    ComputeChildStairsByMinChildValueOption,
    ComputeChildStairsOptions,
} from './types'

const isComputeChildStairsByChildCountOption:
    (options: ComputeChildStairsOptions) => options is ComputeChildStairsByChildCountOption =
    (options: ComputeChildStairsOptions): options is ComputeChildStairsByChildCountOption =>
        !isUndefined((options as ComputeChildStairsByChildCountOption).childCount)

const isComputeChildStairsByMinChildValueOption:
    (options: ComputeChildStairsOptions) => options is ComputeChildStairsByMinChildValueOption =
    (options: ComputeChildStairsOptions): options is ComputeChildStairsByMinChildValueOption =>
        !isUndefined((options as ComputeChildStairsByMinChildValueOption).minChildValue)

export {
    isComputeChildStairsByChildCountOption,
    isComputeChildStairsByMinChildValueOption,
}
