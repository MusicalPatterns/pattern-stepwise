import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { ContourPiece } from '@musical-patterns/utilities'
import { computeBlocks } from './blocks'
import { render, renderUnpitched } from './renderings'
import { StepwiseBlocks, StepwisePieces, StepwiseUnpitchedPieces } from './types'

const computePieces: () => StepwisePieces =
    (): StepwisePieces => {
        const blocks: StepwiseBlocks = computeBlocks()

        const alpha: ContourPiece<PitchValue> = render(blocks.alpha)
        const beta: ContourPiece<PitchValue> = render(blocks.beta)
        const threePer: ContourPiece<PitchValue> = render(blocks.threePer)
        const fivePer: ContourPiece<PitchValue> = render(blocks.fivePer)
        const sevenPer: ContourPiece<PitchValue> = render(blocks.sevenPer)
        const ninePer: ContourPiece<PitchValue> = render(blocks.ninePer)
        const workout: ContourPiece<PitchValue> = render(blocks.workout)

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

const computeUnpitchedPieces: () => StepwiseUnpitchedPieces =
    (): StepwiseUnpitchedPieces => {
        const blocks: StepwiseBlocks = computeBlocks()

        const kick: ContourPiece<ValueOnly> = renderUnpitched(blocks.kick)
        const snare: ContourPiece<ValueOnly> = renderUnpitched(blocks.snare)
        const hihat: ContourPiece<ValueOnly> = renderUnpitched(blocks.hihat)

        return {
            hihat,
            kick,
            snare,
        }
    }

export {
    computePieces,
    computeUnpitchedPieces,
}
