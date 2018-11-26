import { from, Index, to } from '@musical-patterns/utilities'
import { NoteSpec } from '../../../../compile'
import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
} from '../../../../constants'

const buildStepwiseNoteSpec: (duration: Index) => NoteSpec =
    (duration: Index): NoteSpec => ({
        durationSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(from.Index(duration)),
            offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

const buildNoteSpec: (duration: Index) => NoteSpec =
    (duration: Index): NoteSpec => ({
        ...buildStepwiseNoteSpec(duration),
        pitchSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
    })

const buildStepwiseUnpitchedNoteSpec: (duration: Index) => NoteSpec = buildStepwiseNoteSpec

export {
    buildNoteSpec,
    buildStepwiseUnpitchedNoteSpec,
}
