import { NoteSpec } from '@musical-patterns/compiler'
import { DictionaryOf, sequence, to } from '@musical-patterns/utilities'
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

        const mainDescentPart: NoteSpec[] = to.Block(sequence([
            mainDescentBlock,
            mainDescentContinuationBlock,
        ]))
            .map(buildNoteSpec)
        const mainDescentContinuationPart: NoteSpec[] = to.Block(sequence([
            mainDescentContinuationBlock,
            mainDescentBlock,
        ]))
            .map(buildNoteSpec)

        const threePerPart: NoteSpec[] = to.Block(sequence([ threePerBlock, ninePerBlock ]))
            .map(buildNoteSpec)
        const fivePerPart: NoteSpec[] = fivePerBlock
            .map(buildNoteSpec)
        const sevenPerPart: NoteSpec[] = sevenPerBlock
            .map(buildNoteSpec)
        const ninePerPart: NoteSpec[] = to.Block(sequence([ ninePerBlock, threePerBlock ]))
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
