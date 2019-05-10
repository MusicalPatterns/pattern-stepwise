import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { as, ContourPiece, ContourWhole, Cycle, flatten, use } from '@musical-patterns/utilities'
import {
    ALPHA_CYCLING_CARDINAL,
    BETA_CYCLING_CARDINAL,
    FIVE_PER_CYCLING_CARDINAL,
    NINE_PER_CYCLING_CARDINAL,
    SEVEN_PER_CYCLING_CARDINAL,
    THREE_PER_CYCLING_CARDINAL,
    WORKOUT_CYCLING_CARDINAL,
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
            pieces.alpha,
            pieces.beta,
            pieces.workout,
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
        const alpha: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            ALPHA_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const beta: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            BETA_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))
        const workout: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(flatten(use.Cardinal(
            pieceCycle,
            WORKOUT_CYCLING_CARDINAL,
        ) as unknown as Array<ContourPiece<PitchValue>>))

        return {
            alpha,
            beta,
            fivePer,
            ninePer,
            sevenPer,
            threePer,
            workout,
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
