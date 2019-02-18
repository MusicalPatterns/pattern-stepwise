import { NoteSpec } from '@musical-patterns/compiler'
import { STANDARD_DURATIONS_SCALE_INDEX, STANDARD_PITCH_SCALE_INDEX } from '@musical-patterns/pattern'
import { to, translateFromOneIndexedToZeroIndexed } from '@musical-patterns/utilities'
import { REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD } from './constants'

const buildUnpitchedNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        durationSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        gainSpec: {
            scalar: REDUCE_GAIN_BECAUSE_SAMPLES_ARE_REALLY_LOUD,
        },
    })

const buildNoteSpec: (duration: number) => NoteSpec =
    (duration: number): NoteSpec => ({
        durationSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: translateFromOneIndexedToZeroIndexed(to.Ordinal(duration)),
            scaleIndex: STANDARD_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildUnpitchedNoteSpec,
}
