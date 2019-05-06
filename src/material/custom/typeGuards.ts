import { isUndefined } from '@musical-patterns/utilities'
import { ComputeStoopByLengthOption, ComputeStoopByMinimumOption, ComputeStoopOptions } from './types'

const isComputeStoopByLengthOption: (options: ComputeStoopOptions) => options is ComputeStoopByLengthOption =
    (options: ComputeStoopOptions): options is ComputeStoopByLengthOption =>
        !isUndefined((options as ComputeStoopByLengthOption).length)

const isComputeStoopByMinimumOption: (options: ComputeStoopOptions) => options is ComputeStoopByMinimumOption =
    (options: ComputeStoopOptions): options is ComputeStoopByMinimumOption =>
        !isUndefined((options as ComputeStoopByMinimumOption).minimum)

export {
    isComputeStoopByLengthOption,
    isComputeStoopByMinimumOption,
}
