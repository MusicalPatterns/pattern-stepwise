import { Note } from '../../src/types'

const SEPARATION_FOR_NEIGHBORING_NOTES: number = 0.1
const MAX_GAIN: number = 1
const AVOID_PERCUSSION_BLOWING_OUT: number = 0.1
const PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES: number = 1

const stepwiseNoteType: (harmonic: number) => Note =
    (harmonic: number): Note => ({
        duration: harmonic,
        gain: MAX_GAIN,
        pitch: harmonic,
        sustain: harmonic - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

const unpitchedSampleNoteType: (duration: number) => Note =
    (duration: number): Note => ({
        duration,
        gain: AVOID_PERCUSSION_BLOWING_OUT,
        pitch: PLACEHOLDER_PITCH_TO_AVOID_NULL_POINTER_ISSUES,
        sustain: duration - SEPARATION_FOR_NEIGHBORING_NOTES,
    })

export {
    stepwiseNoteType,
    unpitchedSampleNoteType,
}
