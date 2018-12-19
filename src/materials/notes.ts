import { NoteSpec } from '@musical-patterns/compiler'
import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
} from '@musical-patterns/pattern'
import { from, Index, to } from '@musical-patterns/utilities'

const buildUnpitchedNoteSpec: (duration: Index) => NoteSpec =
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
        ...buildUnpitchedNoteSpec(duration),
        pitchSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildUnpitchedNoteSpec,
}
