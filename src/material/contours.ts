import { DurationOnly, PitchDuration } from '@musical-patterns/material'
import { ContourElement, ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { computeBlocks } from './blocks'
import { StepwiseBlocks, StepwiseContours, StepwiseUnpitchedContours } from './types'

const computeContourElement: (blockElement: number) => ContourElement<PitchDuration> =
    (blockElement: number): ContourElement<PitchDuration> =>
        to.ContourElement<PitchDuration>([
            blockElement,
            blockElement,
        ])

const computeUnpitchedContourElement: (blockElement: number) => ContourElement<DurationOnly> =
    (blockElement: number): ContourElement<DurationOnly> =>
        to.ContourElement<DurationOnly>([
            blockElement,
        ])

const computeContours: () => StepwiseContours =
    (): StepwiseContours => {
        const blocks: StepwiseBlocks = computeBlocks()

        const mainDescent: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence(
            blocks.mainDescent,
            blocks.mainDescentContinuation,
        )
            .map(computeContourElement))
        const mainDescentContinuation: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence(
            blocks.mainDescentContinuation,
            blocks.mainDescent,
        )
            .map(computeContourElement))

        const threePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence(
            blocks.threePer,
            blocks.ninePer,
        )
            .map(computeContourElement))
        const fivePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.fivePer
            .map(computeContourElement))
        const sevenPer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.sevenPer
            .map(computeContourElement))
        const ninePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence(
            blocks.ninePer,
            blocks.threePer,
        )
            .map(computeContourElement))

        const backbone: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.backbone
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

        const kick: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
            blocks.kick
                .map(computeUnpitchedContourElement),
        )
        const snare: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
            blocks.snare
                .map(computeUnpitchedContourElement),
        )
        const hihat: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
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
