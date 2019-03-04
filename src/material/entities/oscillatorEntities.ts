import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from '../parts'
import { StepwiseParts } from '../types'
import { OscillatorEntities } from './types'

const buildOscillatorEntities: () => OscillatorEntities =
    (): OscillatorEntities => {
        const parts: StepwiseParts = buildParts()

        const mainDescent: Entity = {
            noteSpecs: parts.mainDescent,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const mainDescentContinuation: Entity = {
            noteSpecs: parts.mainDescentContinuation,
            timbreName: TimbreNameEnum.SAW,
        }

        const threePer: Entity = {
            noteSpecs: parts.threePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const fivePer: Entity = {
            noteSpecs: parts.fivePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const sevenPer: Entity = {
            noteSpecs: parts.sevenPer,
            timbreName: TimbreNameEnum.SINE,
        }

        const ninePer: Entity = {
            noteSpecs: parts.ninePer,
            timbreName: TimbreNameEnum.SINE,
        }

        const backbone: Entity = {
            noteSpecs: parts.backbone,
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
    buildOscillatorEntities,
}
