import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computePieces, computeUnpitchedPieces } from './pieces'
import { StepwisePieces, StepwiseUnpitchedPieces, StepwiseUnpitchedWholes, StepwiseWholes } from './types'

const computeWholes: () => StepwiseWholes =
    (): StepwiseWholes => {
        const pieces: StepwisePieces = computePieces()

        const mainDescent: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.mainDescent,
            pieces.mainDescentContinuation,
        ))
        const mainDescentContinuation: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.mainDescentContinuation,
            pieces.mainDescent,
        ))

        const threePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.threePer,
            pieces.ninePer,
        ))
        const fivePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(pieces.fivePer)
        const sevenPer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(pieces.sevenPer)
        const ninePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.ninePer,
            pieces.threePer,
        ))

        const backbone: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(pieces.backbone)

        return {
            backbone,
            fivePer,
            mainDescent,
            mainDescentContinuation,
            ninePer,
            sevenPer,
            threePer,
        }
    }

const computeUnpitchedWholes: () => StepwiseUnpitchedWholes =
    (): StepwiseUnpitchedWholes => {
        const pieces: StepwiseUnpitchedPieces = computeUnpitchedPieces()

        const kick: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(pieces.kick)
        const snare: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(pieces.snare)
        const hihat: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(pieces.hihat)

        return {
            hihat,
            kick,
            snare,
        }
    }

export {
    computeWholes,
    computeUnpitchedWholes,
}
