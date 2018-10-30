import { Part, PartDictionary, sequence } from '../../../../src'
import { buildStepwiseBlocks } from './blocks'
import { buildStepwiseNoteSpec, buildStepwiseUnpitchedNoteSpec } from './notes'

const buildStepwiseParts: () => PartDictionary =
    (): PartDictionary => {
        const {
            backboneBlock,
            fivePerBlock,
            hihatBlock,
            kickBlock,
            mainDescentBlock,
            mainDescentContinuationBlock,
            ninePerBlock,
            sevenPerBlock,
            snareBlock,
            threePerBlock,
        } = buildStepwiseBlocks()

        const mainDescentPart: Part = sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ])
            .map(buildStepwiseNoteSpec)
        const mainDescentContinuationPart: Part = sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ])
            .map(buildStepwiseNoteSpec)

        const threePerPart: Part = sequence([ threePerBlock, ninePerBlock ])
            .map(buildStepwiseNoteSpec)
        const fivePerPart: Part = fivePerBlock
            .map(buildStepwiseNoteSpec)
        const sevenPerPart: Part = sevenPerBlock
            .map(buildStepwiseNoteSpec)
        const ninePerPart: Part = sequence([ ninePerBlock, threePerBlock ])
            .map(buildStepwiseNoteSpec)

        const backbonePart: Part = backboneBlock
            .map(buildStepwiseNoteSpec)

        const kickPart: Part = kickBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const snarePart: Part = snareBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const hihatPart: Part = hihatBlock
            .map(buildStepwiseUnpitchedNoteSpec)

        return {
            backbonePart,
            fivePerPart,
            hihatPart,
            kickPart,
            mainDescentContinuationPart,
            mainDescentPart,
            ninePerPart,
            sevenPerPart,
            snarePart,
            threePerPart,
        }
    }

export {
    buildStepwiseParts,
}
