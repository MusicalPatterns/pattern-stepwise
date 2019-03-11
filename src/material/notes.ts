import { Note } from '@musical-patterns/compiler'
import { computeContours, computeUnpitchedContours } from './contours'
import { computeNote, computeUnpitchedNote } from './features'
import { StepwiseContours, StepwiseNotes, StepwiseUnpitchedContours } from './types'

const computeNotes: () => StepwiseNotes =
    (): StepwiseNotes => {
        const contours: StepwiseContours = computeContours()
        const unpitchedContours: StepwiseUnpitchedContours = computeUnpitchedContours()

        const mainDescent: Note[] = contours.mainDescent.map(computeNote)
        const mainDescentContinuation: Note[] = contours.mainDescentContinuation.map(computeNote)

        const threePer: Note[] = contours.threePer.map(computeNote)
        const fivePer: Note[] = contours.fivePer.map(computeNote)
        const sevenPer: Note[] = contours.sevenPer.map(computeNote)
        const ninePer: Note[] = contours.ninePer.map(computeNote)

        const backbone: Note[] = contours.backbone.map(computeNote)

        const kick: Note[] = unpitchedContours.kick.map(computeUnpitchedNote)
        const snare: Note[] = unpitchedContours.snare.map(computeUnpitchedNote)
        const hihat: Note[] = unpitchedContours.hihat.map(computeUnpitchedNote)

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
    computeNotes,
}
