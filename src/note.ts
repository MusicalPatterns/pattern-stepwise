import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    DEFAULT_PITCH_SCALE_INDEX,
    FULL_GAIN,
    NoteSpec,
    to,
} from '../../../src'
import { PROBLEMATICALLY_NECESSARY_AND_PROBABLY_INACCURATE_UNPITCHED_SAMPLE_PITCH_SCALAR } from './constants'
import { ContourElement, from } from './nominal'

const buildStepwiseNoteSpec: (duration: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => ({
        durationSpec: {
            index: to.Index(from.ContourElement(contourElement)),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        gainSpec: {
            scalar: FULL_GAIN,
        },
        pitchSpec: {
            index: to.Index(from.ContourElement(contourElement)),
            scaleIndex: DEFAULT_PITCH_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(from.ContourElement(contourElement)),
            offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
        },
    })

const buildUnpitchedStepwiseNoteSpec: (duration: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => ({
        durationSpec: {
            index: to.Index(from.ContourElement(contourElement)),
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Index(1),
            scalar: PROBLEMATICALLY_NECESSARY_AND_PROBABLY_INACCURATE_UNPITCHED_SAMPLE_PITCH_SCALAR,
            scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(from.ContourElement(contourElement)),
            offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
        },
    })

export {
    buildStepwiseNoteSpec,
    buildUnpitchedStepwiseNoteSpec,
}
