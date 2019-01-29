import { NoteSpec } from '@musical-patterns/compiler'
import { Block, DictionaryOf, sequence } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { buildNoteSpec, buildUnpitchedNoteSpec } from './notes'

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

        const mainDescentPartBlocks: Block = sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ])
        const mainDescentPart: NoteSpec[] = mainDescentPartBlocks
            .map(buildNoteSpec)
        const mainDescentContinuationPartBlocks: Block = sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ])
        const mainDescentContinuationPart: NoteSpec[] = mainDescentContinuationPartBlocks
            .map(buildNoteSpec)

        const threePerPartBlocks: Block = sequence([ threePerBlock, ninePerBlock ])
        const threePerPart: NoteSpec[] = threePerPartBlocks
            .map(buildNoteSpec)
        const fivePerPart: NoteSpec[] = fivePerBlock
            .map(buildNoteSpec)
        const sevenPerPart: NoteSpec[] = sevenPerBlock
            .map(buildNoteSpec)
        const ninePerPartBlocks: Block = sequence([ ninePerBlock, threePerBlock ])
        const ninePerPart: NoteSpec[] = ninePerPartBlocks
            .map(buildNoteSpec)

        const backbonePart: NoteSpec[] = backboneBlock
            .map(buildNoteSpec)

        const kickPart: NoteSpec[] = kickBlock
            .map(buildUnpitchedNoteSpec)
        const snarePart: NoteSpec[] = snareBlock
            .map(buildUnpitchedNoteSpec)
        const hihatPart: NoteSpec[] = hihatBlock
            .map(buildUnpitchedNoteSpec)

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
