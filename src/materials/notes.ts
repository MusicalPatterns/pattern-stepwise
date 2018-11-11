import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
    from,
    Index,
    NoteSpec,
    to,
} from '../../../../src'
import { PROBLEMATICALLY_NECESSARY_AND_PROBABLY_INACCURATE_UNPITCHED_SAMPLE_PITCH_SCALAR } from '../constants'

const buildNoteSpec: (duration: Index) => NoteSpec =
    (duration: Index): NoteSpec => ({
        durationSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(from.Index(duration)),
            offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

const buildStepwiseUnpitchedNoteSpec: (duration: Index) => NoteSpec =
    (duration: Index): NoteSpec => ({
        durationSpec: {
            index: to.Index(from.Index(duration)),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Index(1),
            scalar: PROBLEMATICALLY_NECESSARY_AND_PROBABLY_INACCURATE_UNPITCHED_SAMPLE_PITCH_SCALAR,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(from.Index(duration)),
            offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
    })

export {
    buildNoteSpec,
    buildStepwiseUnpitchedNoteSpec,
}
