import { DurationOnly, PitchDuration } from '@musical-patterns/pattern'
import { ContourElement, ContourWhole, sequence, to } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { StepwiseBlocks, StepwiseContours, StepwiseUnpitchedContours } from './types'

const buildContourElement: (blockElement: number) => ContourElement<PitchDuration> =
    (blockElement: number): ContourElement<PitchDuration> =>
        to.ContourElement<PitchDuration>([
            blockElement,
            blockElement,
        ])

const buildUnpitchedContourElement: (blockElement: number) => ContourElement<DurationOnly> =
    (blockElement: number): ContourElement<DurationOnly> =>
        to.ContourElement<DurationOnly>([
            blockElement,
        ])

const buildContours: () => StepwiseContours =
    (): StepwiseContours => {
        const blocks: StepwiseBlocks = buildBlocks()

        const mainDescent: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            blocks.mainDescent,
            blocks.mainDescentContinuation,
        ])
            .map(buildContourElement))
        const mainDescentContinuation: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            blocks.mainDescentContinuation,
            blocks.mainDescent,
        ])
            .map(buildContourElement))

        const threePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            blocks.threePer,
            blocks.ninePer,
        ])
            .map(buildContourElement))
        const fivePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.fivePer
            .map(buildContourElement))
        const sevenPer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.sevenPer
            .map(buildContourElement))
        const ninePer: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(sequence([
            blocks.ninePer,
            blocks.threePer,
        ])
            .map(buildContourElement))

        const backbone: ContourWhole<PitchDuration> = to.ContourWhole<PitchDuration>(blocks.backbone
            .map(buildContourElement))

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

const buildUnpitchedContours: () => StepwiseUnpitchedContours =
    (): StepwiseUnpitchedContours => {
        const blocks: StepwiseBlocks = buildBlocks()

        const kick: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
            blocks.kick
                .map(buildUnpitchedContourElement),
        )
        const snare: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
            blocks.snare
                .map(buildUnpitchedContourElement),
        )
        const hihat: ContourWhole<DurationOnly> = to.ContourWhole<DurationOnly>(
            blocks.hihat
                .map(buildUnpitchedContourElement),
        )

        return {
            hihat,
            kick,
            snare,
        }
    }

export {
    buildContours,
    buildUnpitchedContours,
    buildContourElement,
}
