import { Note } from '@musical-patterns/material'
import { Thunk } from '@musical-patterns/utilities'
import { computeNote, computeUnpitchedNote } from './features'
import { StepwiseNotes, StepwiseUnpitchedWholes, StepwiseWholes } from './types'
import { thunkUnpitchedWholes, thunkWholes } from './wholes'

const thunkNotes: Thunk<StepwiseNotes> =
    (): StepwiseNotes => {
        const wholes: StepwiseWholes = thunkWholes()
        const unpitchedWholes: StepwiseUnpitchedWholes = thunkUnpitchedWholes()

        const alpha: Note[] = wholes.alpha.map(computeNote)
        const beta: Note[] = wholes.beta.map(computeNote)

        const threePer: Note[] = wholes.threePer.map(computeNote)
        const fivePer: Note[] = wholes.fivePer.map(computeNote)
        const sevenPer: Note[] = wholes.sevenPer.map(computeNote)
        const ninePer: Note[] = wholes.ninePer.map(computeNote)

        const workout: Note[] = wholes.workout.map(computeNote)

        const kick: Note[] = unpitchedWholes.kick.map(computeUnpitchedNote)
        const snare: Note[] = unpitchedWholes.snare.map(computeUnpitchedNote)
        const hihat: Note[] = unpitchedWholes.hihat.map(computeUnpitchedNote)

        return {
            alpha,
            beta,
            fivePer,
            hihat,
            kick,
            ninePer,
            sevenPer,
            snare,
            threePer,
            workout,
        }
    }

export {
    thunkNotes,
}
