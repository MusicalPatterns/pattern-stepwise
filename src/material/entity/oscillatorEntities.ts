import { Entity, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { OscillatorEntities } from './types'

const computeOscillatorEntities: () => OscillatorEntities =
    (): OscillatorEntities => {
        const notes: StepwiseNotes = computeNotes()

        const alpha: Entity = {
            sections: [ { notes: notes.alpha } ],
            timbreName: TimbreNameEnum.SQUARE,
        }

        const beta: Entity = {
            sections: [ { notes: notes.beta } ],
            timbreName: TimbreNameEnum.SAW,
        }

        const threePer: Entity = {
            sections: [ { notes: notes.threePer } ],
            timbreName: TimbreNameEnum.SINE,
        }

        const fivePer: Entity = {
            sections: [ { notes: notes.fivePer } ],
            timbreName: TimbreNameEnum.SINE,
        }

        const sevenPer: Entity = {
            sections: [ { notes: notes.sevenPer } ],
            timbreName: TimbreNameEnum.SINE,
        }

        const ninePer: Entity = {
            sections: [ { notes: notes.ninePer } ],
            timbreName: TimbreNameEnum.SINE,
        }

        const workout: Entity = {
            sections: [ { notes: notes.workout } ],
            timbreName: TimbreNameEnum.TRIANGLE,
        }

        return {
            alpha,
            beta,
            fivePer,
            ninePer,
            sevenPer,
            threePer,
            workout,
        }
    }

export {
    computeOscillatorEntities,
}
