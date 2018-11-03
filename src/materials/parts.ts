import { Part, PartDictionary, sequence } from '../../../../src'
import { buildBlocks } from './blocks'
import { buildNoteSpec, buildStepwiseUnpitchedNoteSpec } from './notes'

const buildParts: () => PartDictionary =
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
        } = buildBlocks()

        const mainDescentPart: Part = sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ])
            .map(buildNoteSpec)
        const mainDescentContinuationPart: Part = sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ])
            .map(buildNoteSpec)

        const threePerPart: Part = sequence([ threePerBlock, ninePerBlock ])
            .map(buildNoteSpec)
        const fivePerPart: Part = fivePerBlock
            .map(buildNoteSpec)
        const sevenPerPart: Part = sevenPerBlock
            .map(buildNoteSpec)
        const ninePerPart: Part = sequence([ ninePerBlock, threePerBlock ])
            .map(buildNoteSpec)

        const backbonePart: Part = backboneBlock
            .map(buildNoteSpec)

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
    buildParts,
}
