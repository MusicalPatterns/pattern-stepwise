import { Block, Cardinal, Value } from '@musical-patterns/utilities'

interface ComputeStoopByLengthOption {
    length: Cardinal<Block>,
}

interface ComputeStoopByMinimumOption {
    minimum: Value,
}

type ComputeStoopOptionsBoth = ComputeStoopByLengthOption & ComputeStoopByMinimumOption

type ComputeStoopOptions = ComputeStoopByLengthOption | ComputeStoopByMinimumOption | ComputeStoopOptionsBoth

enum StoopType {
    BACKBONE = 'BACKBONE',
    ASCENT = 'ASCENT',
    DESCENT = 'DESCENT',
}

type StoopInstruction = [ Value, StoopType ]

type ComputeStoopParameters = ComputeStoopOptions & { stoopType: StoopType, value: Value }

export {
    ComputeStoopOptions,
    ComputeStoopByMinimumOption,
    ComputeStoopByLengthOption,
    ComputeStoopOptionsBoth,
    StoopType,
    StoopInstruction,
    ComputeStoopParameters,
}
