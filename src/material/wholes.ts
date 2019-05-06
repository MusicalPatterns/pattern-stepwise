import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, Cycle, flatten, use } from '@musical-patterns/utilities'
import {
    BACKBONE_CYCLING_CARDINAL,
    FIVE_PER_CYCLING_CARDINAL,
    MAIN_DESCENT_CONTINUATION_CYCLING_CARDINAL,
    MAIN_DESCENT_CYCLING_CARDINAL,
    NINE_PER_CYCLING_CARDINAL,
    SEVEN_PER_CYCLING_CARDINAL,
    THREE_PER_CYCLING_CARDINAL,
} from './constants'
import { computePieces, computeUnpitchedPieces } from './pieces'
import { StepwisePieces, StepwiseUnpitchedPieces, StepwiseUnpitchedWholes, StepwiseWholes } from './types'

const computeWholes: () => StepwiseWholes =
    (): StepwiseWholes => {
        const pieces: StepwisePieces = computePieces()

        const pieceCycle: Cycle<ContourPiece<PitchValue>> = as.Cycle<ContourPiece<PitchValue>>([
            pieces.threePer,
            pieces.fivePer,
            pieces.sevenPer,
            pieces.ninePer,
            pieces.mainDescent,
            pieces.mainDescentContinuation,
            pieces.backbone,
        ])

        const threePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            THREE_PER_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const fivePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            FIVE_PER_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const sevenPer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            SEVEN_PER_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const ninePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            NINE_PER_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const mainDescent: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            MAIN_DESCENT_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const mainDescentContinuation: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            MAIN_DESCENT_CONTINUATION_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const backbone: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            BACKBONE_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))

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
