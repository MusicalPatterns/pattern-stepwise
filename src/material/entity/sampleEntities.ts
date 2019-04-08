// tslint:disable no-dead-store

import { Entity, TimbreNameEnum } from '@musical-patterns/material'
import { computeNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { SampleEntities } from './types'

const computeSampleEntities: () => SampleEntities =
    (): SampleEntities => {
        const notes: StepwiseNotes = computeNotes()

        const mainDescent: Entity = {
            sections: [ { notes: notes.mainDescent } ],
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const mainDescentContinuation: Entity = {
            sections: [ { notes: notes.mainDescentContinuation } ],
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

        const backbone: Entity = {
            sections: [ { notes: notes.backbone } ],
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
            fivePer,
            hihat,
            kick,
            mainDescent,
            mainDescentContinuation,
            sevenPer,
            snare,
            threePer,
        }
    }

export {
    computeSampleEntities,
}
