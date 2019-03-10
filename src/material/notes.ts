import { Note } from '@musical-patterns/compiler'
import { buildContours, buildUnpitchedContours } from './contours'
import { buildNote, buildUnpitchedNote } from './features'
import { StepwiseContours, StepwiseNotes, StepwiseUnpitchedContours } from './types'

const buildNotes: () => StepwiseNotes =
    (): StepwiseNotes => {
        const contours: StepwiseContours = buildContours()
        const unpitchedContours: StepwiseUnpitchedContours = buildUnpitchedContours()

        const mainDescent: Note[] = contours.mainDescent.map(buildNote)
        const mainDescentContinuation: Note[] = contours.mainDescentContinuation.map(buildNote)

        const threePer: Note[] = contours.threePer.map(buildNote)
        const fivePer: Note[] = contours.fivePer.map(buildNote)
        const sevenPer: Note[] = contours.sevenPer.map(buildNote)
        const ninePer: Note[] = contours.ninePer.map(buildNote)

        const backbone: Note[] = contours.backbone.map(buildNote)

        const kick: Note[] = unpitchedContours.kick.map(buildUnpitchedNote)
        const snare: Note[] = unpitchedContours.snare.map(buildUnpitchedNote)
        const hihat: Note[] = unpitchedContours.hihat.map(buildUnpitchedNote)

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
    buildNotes,
}
