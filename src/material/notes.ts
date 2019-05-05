import { Note } from '@musical-patterns/material'
import { computeNote, computeUnpitchedNote } from './features'
import { StepwiseNotes, StepwiseUnpitchedWholes, StepwiseWholes } from './types'
import { computeUnpitchedWholes, computeWholes } from './wholes'

const computeNotes: () => StepwiseNotes =
    (): StepwiseNotes => {
        const wholes: StepwiseWholes = computeWholes()
        const unpitchedWholes: StepwiseUnpitchedWholes = computeUnpitchedWholes()

        const mainDescent: Note[] = wholes.mainDescent.map(computeNote)
        const mainDescentContinuation: Note[] = wholes.mainDescentContinuation.map(computeNote)

        const threePer: Note[] = wholes.threePer.map(computeNote)
        const fivePer: Note[] = wholes.fivePer.map(computeNote)
        const sevenPer: Note[] = wholes.sevenPer.map(computeNote)
        const ninePer: Note[] = wholes.ninePer.map(computeNote)

        const backbone: Note[] = wholes.backbone.map(computeNote)

        const kick: Note[] = unpitchedWholes.kick.map(computeUnpitchedNote)
        const snare: Note[] = unpitchedWholes.snare.map(computeUnpitchedNote)
        const hihat: Note[] = unpitchedWholes.hihat.map(computeUnpitchedNote)

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
