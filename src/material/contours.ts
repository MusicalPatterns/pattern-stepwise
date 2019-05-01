import { PitchValue, ValueOnly } from '@musical-patterns/material'
import { as, ContourElement, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeBlocks } from './blocks'
import { StepwiseBlocks, StepwiseContours, StepwiseUnpitchedContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchValue> =
    (blockElement: number): ContourElement<PitchValue> =>
        as.ContourElement<PitchValue>([
            blockElement,
            blockElement,
        ])

const computeUnpitchedContourElement: (blockElement: number) => ContourElement<ValueOnly> =
    (blockElement: number): ContourElement<ValueOnly> =>
        as.ContourElement<ValueOnly>([
            blockElement,
        ])

const computeContours: () => StepwiseContours =
    (): StepwiseContours => {
        const blocks: StepwiseBlocks = computeBlocks()

        const mainDescent: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            blocks.mainDescent,
            blocks.mainDescentContinuation,
        )
            .map(computeContourElement))
        const mainDescentContinuation: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            blocks.mainDescentContinuation,
            blocks.mainDescent,
        )
            .map(computeContourElement))

        const threePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            blocks.threePer,
            blocks.ninePer,
        )
            .map(computeContourElement))
        const fivePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(blocks.fivePer
            .map(computeContourElement))
        const sevenPer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(blocks.sevenPer
            .map(computeContourElement))
        const ninePer: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(sequence(
            blocks.ninePer,
            blocks.threePer,
        )
            .map(computeContourElement))

        const backbone: ContourWhole<PitchValue> = as.ContourWhole<PitchValue>(blocks.backbone
            .map(computeContourElement))

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

const computeUnpitchedContours: () => StepwiseUnpitchedContours =
    (): StepwiseUnpitchedContours => {
        const blocks: StepwiseBlocks = computeBlocks()

        const kick: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(
            blocks.kick
                .map(computeUnpitchedContourElement),
        )
        const snare: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(
            blocks.snare
                .map(computeUnpitchedContourElement),
        )
        const hihat: ContourWhole<ValueOnly> = as.ContourWhole<ValueOnly>(
            blocks.hihat
                .map(computeUnpitchedContourElement),
        )

        return {
            hihat,
            kick,
            snare,
        }
    }

export {
    computeContours,
    computeUnpitchedContours,
    computeContourElement,
}
