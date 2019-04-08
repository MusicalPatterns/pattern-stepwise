import { Entity, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { OscillatorEntities } from './types'

const computeOscillatorEntities: () => OscillatorEntities =
    (): OscillatorEntities => {
        const notes: StepwiseNotes = computeNotes()

        const mainDescent: Entity = {
            sections: [ { notes: notes.mainDescent } ],
            timbreName: TimbreNameEnum.SQUARE,
        }

        const mainDescentContinuation: Entity = {
            sections: [ { notes: notes.mainDescentContinuation } ],
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

        const backbone: Entity = {
            sections: [ { notes: notes.backbone } ],
            timbreName: TimbreNameEnum.TRIANGLE,
        }

        return {
            backbone,
            fivePer,
            mainDescent,
            mainDescentContinuation,
            ninePer,
            sevenPer,
            threePer,
        }
    }

export {
    computeOscillatorEntities,
}
