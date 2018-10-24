import { NoteSpec } from '../../../src/compile/types'
import { FULL_GAIN, SEPARATION_FOR_NEIGHBORING_NOTES } from '../../../src/constants'
import { Index, Scalar } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import * as stepwiseFrom from './utilities/from'
import { ContourElement } from './utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const DURATIONS_AND_UNPITCHED_SAMPLES_SCALE_INDEX: Index = 1 as any
// tslint:disable-next-line:no-any no-magic-numbers
const PITCH_SCALE_INDEX: Index = 2 as any
// tslint:disable-next-line:no-any no-magic-numbers
const UNPITCHED_SAMPLE_PITCH_SCALAR: Scalar = 256 as any

const buildStepwiseNoteSpec: (duration: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => ({
        durationSpec: {
            index: to.Index(stepwiseFrom.ContourElement(contourElement)),
            scaleIndex: DURATIONS_AND_UNPITCHED_SAMPLES_SCALE_INDEX,
        },
        gainSpec: {
            scalar: FULL_GAIN,
        },
        pitchSpec: {
            index: to.Index(stepwiseFrom.ContourElement(contourElement)),
            scaleIndex: PITCH_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(stepwiseFrom.ContourElement(contourElement)),
            offset: SEPARATION_FOR_NEIGHBORING_NOTES,
        },
    })

const buildUnpitchedStepwiseNoteSpec: (duration: ContourElement) => NoteSpec =
    (contourElement: ContourElement): NoteSpec => ({
        durationSpec: {
            index: to.Index(stepwiseFrom.ContourElement(contourElement)),
            scaleIndex: DURATIONS_AND_UNPITCHED_SAMPLES_SCALE_INDEX,
        },
        pitchSpec: {
            index: to.Index(1),
            scalar: UNPITCHED_SAMPLE_PITCH_SCALAR,
            scaleIndex: DURATIONS_AND_UNPITCHED_SAMPLES_SCALE_INDEX,
        },
        sustainSpec: {
            index: to.Index(stepwiseFrom.ContourElement(contourElement)),
            offset: SEPARATION_FOR_NEIGHBORING_NOTES,
        },
    })

export {
    buildStepwiseNoteSpec,
    buildUnpitchedStepwiseNoteSpec,
}
