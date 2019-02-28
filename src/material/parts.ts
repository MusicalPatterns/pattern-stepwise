import { NoteSpec } from '@musical-patterns/compiler'
import { sequence, to } from '@musical-patterns/utilities'
import { buildBlocks } from './blocks'
import { buildNoteSpec, buildUnpitchedNoteSpec } from './notes'
import { StepwiseBlocks, StepwiseParts } from './types'

const buildParts: () => StepwiseParts =
    (): StepwiseParts => {
        const blocks: StepwiseBlocks = buildBlocks()

        const mainDescent: NoteSpec[] = to.Block(sequence([
            blocks.mainDescent,
            blocks.mainDescentContinuation,
        ]))
            .map(buildNoteSpec)
        const mainDescentContinuation: NoteSpec[] = to.Block(sequence([
            blocks.mainDescentContinuation,
            blocks.mainDescent,
        ]))
            .map(buildNoteSpec)

        const threePer: NoteSpec[] = to.Block(sequence([ blocks.threePer, blocks.ninePer ]))
            .map(buildNoteSpec)
        const fivePer: NoteSpec[] = blocks.fivePer
            .map(buildNoteSpec)
        const sevenPer: NoteSpec[] = blocks.sevenPer
            .map(buildNoteSpec)
        const ninePer: NoteSpec[] = to.Block(sequence([ blocks.ninePer, blocks.threePer ]))
            .map(buildNoteSpec)

        const backbone: NoteSpec[] = blocks.backbone
            .map(buildNoteSpec)

        const kick: NoteSpec[] = blocks.kick
            .map(buildUnpitchedNoteSpec)
        const snare: NoteSpec[] = blocks.snare
            .map(buildUnpitchedNoteSpec)
        const hihat: NoteSpec[] = blocks.hihat
            .map(buildUnpitchedNoteSpec)

        return {
            backbone,
            fivePer,
            hihat,
            kick,
            mainDescent,
            mainDescentContinuation,
            ninePer,
            sevenPer,
            snare,
            threePer,
        }
    }

export {
    buildParts,
}
