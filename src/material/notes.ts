import { NoteSpec } from '@musical-patterns/compiler'
import {
    DurationOnly,
    PitchDuration,
    STANDARD_DURATIONS_SCALE_INDEX,
    STANDARD_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { ContourElement, to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'
import { REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD } from './constants'

const buildUnpitchedNoteSpec: (contourElement: ContourElement<DurationOnly>) => NoteSpec =
    ([ duration ]: ContourElement<DurationOnly>): NoteSpec => ({
        durationSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        gainSpec: {
            scalar: REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD,
        },
    })

const buildNoteSpec: (contourElement: ContourElement<PitchDuration>) => NoteSpec =
    ([ pitch, duration ]: ContourElement<PitchDuration>): NoteSpec => ({
        durationSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(pitch)),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildUnpitchedNoteSpec,
}
