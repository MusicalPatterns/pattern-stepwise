// tslint:disable no-dead-store

import { Entity, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { SampleEntities } from './types'

const computeSampleEntities: () => SampleEntities =
    (): SampleEntities => {
        const notes: StepwiseNotes = computeNotes()

        const alpha: Entity = {
            sections: [ { notes: notes.alpha } ],
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const beta: Entity = {
            sections: [ { notes: notes.beta } ],
            timbreName: TimbreNameEnum.TUBA,
        }

        const threePer: Entity = {
            sections: [ { notes: notes.threePer } ],
            timbreName: TimbreNameEnum.FLUTE,
        }
        const fivePer: Entity = {
            sections: [ { notes: notes.fivePer } ],
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const sevenPer: Entity = {
            sections: [ { notes: notes.sevenPer } ],
            timbreName: TimbreNameEnum.TRUMPET,
        }
        const ninePer: Entity = {
            sections: [ { notes: notes.ninePer } ],
            timbreName: TimbreNameEnum.CELLO,
        }

        const workout: Entity = {
            sections: [ { notes: notes.workout } ],
            timbreName: TimbreNameEnum.PIANO,
        }

        const kick: Entity = {
            sections: [ { notes: notes.kick } ],
            timbreName: TimbreNameEnum.KICK,
        }
        const snare: Entity = {
            sections: [ { notes: notes.snare } ],
            timbreName: TimbreNameEnum.SNARE,
        }
        const hihat: Entity = {
            sections: [ { notes: notes.hihat } ],
            timbreName: TimbreNameEnum.HIHAT,
        }

        return {
            alpha,
            beta,
            fivePer,
            hihat,
            kick,
            sevenPer,
            snare,
            threePer,
        }
    }

export {
    computeSampleEntities,
}
