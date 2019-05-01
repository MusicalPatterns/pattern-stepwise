import {
    Note,
    PitchValue,
    REDUCE_GAIN_BECAUSE_SAMPLES_ARE_SUPER_LOUD,
    Scale,
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
        pitch: {
            scalar: as.Scalar<Pitch>(1),
            scaleIndex: as.Ordinal<Array<Scale<Pitch>>>(1),
        },
        value: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
        },
    })

const computeNote: (contourElement: ContourElement<PitchValue>) => Note =
    ([ pitch, value ]: ContourElement<PitchValue>): Note => ({
        pitch: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Pitch>>>(pitch)),
        },
        value: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Value>>>(value)),
        },
    })

export {
    computeNote,
    computeUnpitchedNote,
}
