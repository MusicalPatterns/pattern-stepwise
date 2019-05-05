import { Block, Cardinal, Value } from '@musical-patterns/utilities'

interface ComputeStoopByLengthOption {
    length: Cardinal<Block>,
}

interface ComputeStoopByMinimumOption {
    minimum: Value,
}

type ComputeStoopOptionsBoth = ComputeStoopByLengthOption & ComputeStoopByMinimumOption

type ComputeStoopOptions = ComputeStoopByLengthOption | ComputeStoopByMinimumOption | ComputeStoopOptionsBoth

export {
    ComputeStoopOptions,
    ComputeStoopByMinimumOption,
    ComputeStoopByLengthOption,
    ComputeStoopOptionsBoth,
}
