import {
    Note,
    PitchValue,
    REDUCE_GAIN_BECAUSE_SAMPLES_ARE_SUPER_LOUD,
    STANDARD_PITCH_SCALE_INDEX,
    STANDARD_VALUE_SCALE_INDEX,
    ValueOnly,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Pitch,
    Scalar,
    translateFromOneIndexedToZeroIndexed,
    Value,
} from '@musical-patterns/utilities'

const computeUnpitchedNote: (contourElement: ContourElement<ValueOnly>) => Note =
    ([ value ]: ContourElement<ValueOnly>): Note => ({
        intensity: {
            scalar: REDUCE_GAIN_BECAUSE_SAMPLES_ARE_SUPER_LOUD,
        },
        value: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
            scaleIndex: STANDARD_VALUE_SCALE_INDEX,
        },
    })

const computeNote: (contourElement: ContourElement<PitchValue>) => Note =
    ([ pitch, value ]: ContourElement<PitchValue>): Note => ({
        pitch: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Pitch>>>(pitch)),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
        value: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
            scaleIndex: STANDARD_VALUE_SCALE_INDEX,
        },
    })

export {
    computeNote,
    computeUnpitchedNote,
}
