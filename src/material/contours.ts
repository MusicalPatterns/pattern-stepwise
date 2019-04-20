import { DurationOnly, PitchDuration } from '@musical-patterns/material'
import { as, ContourElement, ContourWhole, sequence } from '@musical-patterns/utilities'
import { computeBlocks } from './blocks'
import { StepwiseBlocks, StepwiseContours, StepwiseUnpitchedContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchDuration> =
    (blockElement: number): ContourElement<PitchDuration> =>
        as.ContourElement<PitchDuration>([
            blockElement,
            blockElement,
        ])

const computeUnpitchedContourElement: (blockElement: number) => ContourElement<DurationOnly> =
    (blockElement: number): ContourElement<DurationOnly> =>
        as.ContourElement<DurationOnly>([
            blockElement,
        ])

const computeContours: () => StepwiseContours =
    (): StepwiseContours => {
        const blocks: StepwiseBlocks = computeBlocks()

        const mainDescent: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(sequence(
            blocks.mainDescent,
            blocks.mainDescentContinuation,
        )
            .map(computeContourElement))
        const mainDescentContinuation: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(sequence(
            blocks.mainDescentContinuation,
            blocks.mainDescent,
        )
            .map(computeContourElement))

        const threePer: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(sequence(
            blocks.threePer,
            blocks.ninePer,
        )
            .map(computeContourElement))
        const fivePer: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(blocks.fivePer
            .map(computeContourElement))
        const sevenPer: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(blocks.sevenPer
            .map(computeContourElement))
        const ninePer: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(sequence(
            blocks.ninePer,
            blocks.threePer,
        )
            .map(computeContourElement))

        const backbone: ContourWhole<PitchDuration> = as.ContourWhole<PitchDuration>(blocks.backbone
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

        const kick: ContourWhole<DurationOnly> = as.ContourWhole<DurationOnly>(
            blocks.kick
                .map(computeUnpitchedContourElement),
        )
        const snare: ContourWhole<DurationOnly> = as.ContourWhole<DurationOnly>(
            blocks.snare
                .map(computeUnpitchedContourElement),
        )
        const hihat: ContourWhole<DurationOnly> = as.ContourWhole<DurationOnly>(
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
