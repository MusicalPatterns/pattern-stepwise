// tslint:disable no-dead-store

import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { buildParts } from '../parts'
import { StepwiseParts } from '../types'
import { SampleEntities } from './types'

const buildSampleEntities: () => SampleEntities =
    (): SampleEntities => {
        const parts: StepwiseParts = buildParts()

        const mainDescent: Entity = {
            noteSpecs: parts.mainDescent,
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const mainDescentContinuation: Entity = {
            noteSpecs: parts.mainDescentContinuation,
            timbreName: TimbreNameEnum.TUBA,
        }

        const threePer: Entity = {
            noteSpecs: parts.threePer,
            timbreName: TimbreNameEnum.FLUTE,
        }
        const fivePer: Entity = {
            noteSpecs: parts.fivePer,
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const sevenPer: Entity = {
            noteSpecs: parts.sevenPer,
            timbreName: TimbreNameEnum.TRUMPET,
        }
        const ninePer: Entity = {
            noteSpecs: parts.ninePer,
            timbreName: TimbreNameEnum.CELLO,
        }

        const backbone: Entity = {
            noteSpecs: parts.backbone,
            timbreName: TimbreNameEnum.PIANO,
        }

        const kick: Entity = {
            noteSpecs: parts.kick,
            timbreName: TimbreNameEnum.KICK,
        }
        const snare: Entity = {
            noteSpecs: parts.snare,
            timbreName: TimbreNameEnum.SNARE,
        }
        const hihat: Entity = {
            noteSpecs: parts.hihat,
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
