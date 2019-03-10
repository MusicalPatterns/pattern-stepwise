import { Note } from '@musical-patterns/compiler'
import {
    DurationOnly,
    PitchDuration,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { ContourElement, to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'
import { REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD } from './constants'

const buildUnpitchedNote: (contourElement: ContourElement<DurationOnly>) => Note =
    ([ duration ]: ContourElement<DurationOnly>): Note => ({
        duration: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        gain: {
            scalar: REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD,
        },
    })

const buildNote: (contourElement: ContourElement<PitchDuration>) => Note =
    ([ pitch, duration ]: ContourElement<PitchDuration>): Note => ({
        duration: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitch: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(pitch)),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNote,
    buildUnpitchedNote,
}
