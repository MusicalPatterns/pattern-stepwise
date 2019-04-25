import {
    DurationOnly,
    Note,
    PitchDuration,
    REDUCE_GAIN_BECAUSE_SAMPLES_ARE_SUPER_LOUD,
    STANDARD_DURATION_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/material'
import {
    as,
    ContourElement,
    Duration,
    Pitch,
    Scalar,
    translateFromOneIndexedToZeroIndexed,
} from '@musical-patterns/utilities'

const computeUnpitchedNote: (contourElement: ContourElement<DurationOnly>) => Note =
    ([ duration ]: ContourElement<DurationOnly>): Note => ({
        duration: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Duration>>>(duration)),
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
        gain: {
            scalar: REDUCE_GAIN_BECAUSE_SAMPLES_ARE_SUPER_LOUD,
        },
    })

const computeNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => ({
        duration: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Duration>>>(duration)),
            scaleIndex: STANDARD_DURATION_SCALE_INDEX,
        },
        pitch: {
            index: translateFromOneIndexedToZeroIndexed(as.Ordinal<Array<Scalar<Pitch>>>(pitch)),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    computeNote,
    computeUnpitchedNote,
}
