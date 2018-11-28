import { DictionaryOf, PartSpec, sequence } from '@musical-patterns/shared'
import { buildBlocks } from './blocks'
import { buildNoteSpec, buildStepwiseUnpitchedNoteSpec } from './notes'

const buildParts: () => DictionaryOf<PartSpec> =
    (): DictionaryOf<PartSpec> => {
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

        const mainDescentPart: PartSpec = sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ])
            .map(buildNoteSpec)
        const mainDescentContinuationPart: PartSpec = sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ])
            .map(buildNoteSpec)

        const threePerPart: PartSpec = sequence([ threePerBlock, ninePerBlock ])
            .map(buildNoteSpec)
        const fivePerPart: PartSpec = fivePerBlock
            .map(buildNoteSpec)
        const sevenPerPart: PartSpec = sevenPerBlock
            .map(buildNoteSpec)
        const ninePerPart: PartSpec = sequence([ ninePerBlock, threePerBlock ])
            .map(buildNoteSpec)

        const backbonePart: PartSpec = backboneBlock
            .map(buildNoteSpec)

        const kickPart: PartSpec = kickBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const snarePart: PartSpec = snareBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const hihatPart: PartSpec = hihatBlock
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
