import {
    MAX_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
} from '../../../src/constants'
import { Note } from '../../../src/types'
import * as from from '../../../src/utilities/from'
import { Scalar } from '../../../src/utilities/nominalTypes'
import * as to from '../../../src/utilities/to'
import * as stepwiseFrom from './utilities/from'
import { ContourElement } from './utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const AVOID_PERCUSSION_BLOWING_OUT: Scalar = 0.1 as any

const stepwiseNoteType: (duration: ContourElement) => Note =
    (contourElement: ContourElement): Note => ({
        duration: to.Time(stepwiseFrom.ContourElement(contourElement)),
        gain: MAX_GAIN,
        pitchIndex: to.Index(stepwiseFrom.ContourElement(contourElement)),
        sustain: to.Time(stepwiseFrom.ContourElement(contourElement) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
    })

const unpitchedSampleNoteType: (duration: ContourElement) => Note =
    (contourElement: ContourElement): Note => ({
        duration: to.Time(stepwiseFrom.ContourElement(contourElement)),
        gain: AVOID_PERCUSSION_BLOWING_OUT,
        pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
        sustain: to.Time(stepwiseFrom.ContourElement(contourElement) - from.Time(SEPARATION_FOR_NEIGHBORING_NOTES)),
    })

export {
    stepwiseNoteType,
    unpitchedSampleNoteType,
}
