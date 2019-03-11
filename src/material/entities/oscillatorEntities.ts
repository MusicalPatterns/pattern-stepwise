import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { computeNotes } from '../notes'
import { StepwiseNotes } from '../types'
import { OscillatorEntities } from './types'

const computeOscillatorEntities: () => OscillatorEntities =
    (): OscillatorEntities => {
        const notes: StepwiseNotes = computeNotes()

        const mainDescent: Entity = {
            notes: notes.mainDescent,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const mainDescentContinuation: Entity = {
            notes: notes.mainDescentContinuation,
            timbreName: TimbreNameEnum.SAW,
        }

        const threePer: Entity = {
            notes: notes.threePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const fivePer: Entity = {
            notes: notes.fivePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const sevenPer: Entity = {
            notes: notes.sevenPer,
            timbreName: TimbreNameEnum.SINE,
        }

        const ninePer: Entity = {
            notes: notes.ninePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const backbone: Entity = {
            notes: notes.backbone,
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
