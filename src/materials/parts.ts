import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, sequence } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { buildNoteSpec, buildStepwiseUnpitchedNoteSpec } from './notes'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
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

        const mainDescentPart: NoteSpec[] = sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ])
            .map(buildNoteSpec)
        const mainDescentContinuationPart: NoteSpec[] = sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ])
            .map(buildNoteSpec)

        const threePerPart: NoteSpec[] = sequence([ threePerBlock, ninePerBlock ])
            .map(buildNoteSpec)
        const fivePerPart: NoteSpec[] = fivePerBlock
            .map(buildNoteSpec)
        const sevenPerPart: NoteSpec[] = sevenPerBlock
            .map(buildNoteSpec)
        const ninePerPart: NoteSpec[] = sequence([ ninePerBlock, threePerBlock ])
            .map(buildNoteSpec)

        const backbonePart: NoteSpec[] = backboneBlock
            .map(buildNoteSpec)

        const kickPart: NoteSpec[] = kickBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const snarePart: NoteSpec[] = snareBlock
            .map(buildStepwiseUnpitchedNoteSpec)
        const hihatPart: NoteSpec[] = hihatBlock
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
