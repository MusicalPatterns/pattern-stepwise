import { NoteSpec } from '@musical-patterns/compiler'
import { buildContours, buildUnpitchedContours } from './contours'
import { buildNoteSpec, buildUnpitchedNoteSpec } from './notes'
import { StepwiseContours, StepwiseParts, StepwiseUnpitchedContours } from './types'

const buildParts: () => StepwiseParts =
    (): StepwiseParts => {
        const contours: StepwiseContours = buildContours()
        const unpitchedContours: StepwiseUnpitchedContours = buildUnpitchedContours()

        const mainDescent: NoteSpec[] = contours.mainDescent.map(buildNoteSpec)
        const mainDescentContinuation: NoteSpec[] = contours.mainDescentContinuation.map(buildNoteSpec)

        const threePer: NoteSpec[] = contours.threePer.map(buildNoteSpec)
        const fivePer: NoteSpec[] = contours.fivePer.map(buildNoteSpec)
        const sevenPer: NoteSpec[] = contours.sevenPer.map(buildNoteSpec)
        const ninePer: NoteSpec[] = contours.ninePer.map(buildNoteSpec)

        const backbone: NoteSpec[] = contours.backbone.map(buildNoteSpec)

        const kick: NoteSpec[] = unpitchedContours.kick.map(buildUnpitchedNoteSpec)
        const snare: NoteSpec[] = unpitchedContours.snare.map(buildUnpitchedNoteSpec)
        const hihat: NoteSpec[] = unpitchedContours.hihat.map(buildUnpitchedNoteSpec)

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
