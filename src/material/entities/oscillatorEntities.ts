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
            timbreName: TimbreNameEnum.SQUARE,
        }

        const fivePer: Entity = {
            noteSpecs: parts.fivePer,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const sevenPer: Entity = {
            noteSpecs: parts.sevenPer,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const ninePer: Entity = {
            noteSpecs: parts.ninePer,
            timbreName: TimbreNameEnum.SQUARE,
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
