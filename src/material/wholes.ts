import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { as, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computePieces, computeUnpitchedPieces } from './pieces'
import { StepwisePieces, StepwiseUnpitchedPieces, StepwiseUnpitchedWholes, StepwiseWholes } from './types'

const computeWholes: () => StepwiseWholes =
    (): StepwiseWholes => {
        const pieces: StepwisePieces = computePieces()

        const threePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
        ))
        const fivePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
            pieces.threePer,
        ))
        const sevenPer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
            pieces.threePer,
            pieces.fivePer,
        ))
        const ninePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
        ))
        const mainDescent: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
        ))
        const mainDescentContinuation: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.mainDescentContinuation,
            pieces.backbone,
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
        ))
        const backbone: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            pieces.backbone,
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
        ))

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

        return {
            hihat: as.ContourWhole<ValueOnly>(pieces.hihat),
            kick: as.ContourWhole<ValueOnly>(pieces.kick),
            snare: as.ContourWhole<ValueOnly>(pieces.snare),
        }
    }

export {
    computeWholes,
    computeUnpitchedWholes,
}
