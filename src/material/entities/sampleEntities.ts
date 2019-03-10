// tslint:disable no-dead-store

import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { SampleEntities } from './types'

const buildSampleEntities: () => SampleEntities =
    (): SampleEntities => {
        const notes: StepwiseNotes = buildNotes()

        const mainDescent: Entity = {
            notes: notes.mainDescent,
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const mainDescentContinuation: Entity = {
            notes: notes.mainDescentContinuation,
            timbreName: TimbreNameEnum.TUBA,
        }

        const threePer: Entity = {
            notes: notes.threePer,
            timbreName: TimbreNameEnum.FLUTE,
        }
        const fivePer: Entity = {
            notes: notes.fivePer,
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const sevenPer: Entity = {
            notes: notes.sevenPer,
            timbreName: TimbreNameEnum.TRUMPET,
        }
        const ninePer: Entity = {
            notes: notes.ninePer,
            timbreName: TimbreNameEnum.CELLO,
        }

        const backbone: Entity = {
            notes: notes.backbone,
            timbreName: TimbreNameEnum.PIANO,
        }

        const kick: Entity = {
            notes: notes.kick,
            timbreName: TimbreNameEnum.KICK,
        }
        const snare: Entity = {
            notes: notes.snare,
            timbreName: TimbreNameEnum.SNARE,
        }
        const hihat: Entity = {
            notes: notes.hihat,
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
    buildSampleEntities,
}
