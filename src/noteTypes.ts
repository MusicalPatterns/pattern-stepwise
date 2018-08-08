import {
    MAX_GAIN,
    PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
    SEPARATION_FOR_NEIGHBORING_NOTES,
} from '../../../src/constants'
import { Note } from '../../../src/types'
import { Scalar } from '../../../src/utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const AVOID_PERCUSSION_BLOWING_OUT: Scalar = 0.1 as any

const stepwiseNoteType: (harmonic: number) => Note =
    (harmonic: number): Note => ({
        duration: harmonic,
        gain: MAX_GAIN,
        pitchIndex: harmonic,
        sustain: harmonic - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

const unpitchedSampleNoteType: (duration: number) => Note =
    (duration: number): Note => ({
        duration,
        gain: AVOID_PERCUSSION_BLOWING_OUT,
        pitchIndex: PLACEHOLDER_PITCH_INDEX_TO_AVOID_NULL_POINTER_ISSUES,
        sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

export {
    stepwiseNoteType,
    unpitchedSampleNoteType,
}
