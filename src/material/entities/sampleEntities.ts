// tslint:disable no-dead-store

import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildParts } from '../parts'

const buildSampleEntities: () => DictionaryOf<Entity> =
    (): DictionaryOf<Entity> => {
        const {
            backbonePart,
            fivePerPart,
            hihatPart,
            kickPart,
            mainDescentContinuationPart,
            mainDescentPart,
            ninePerPart,
            sevenPerPart,
            snarePart,
            threePerPart,
        } = buildParts()

        const mainDescentSampleEntity: Entity = {
            noteSpecs: mainDescentPart,
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const mainDescentContinuationSampleEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreNameEnum.TUBA,
        }

        const threePerSampleEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreNameEnum.FLUTE,
        }
        const fivePerSampleEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const sevenPerSampleEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreNameEnum.TRUMPET,
        }
        const ninePerSampleEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreNameEnum.CELLO,
        }

        const backboneSampleEntity: Entity = {
            noteSpecs: backbonePart,
            timbreName: TimbreNameEnum.PIANO,
        }

        const kickSampleEntity: Entity = {
            noteSpecs: kickPart,
            timbreName: TimbreNameEnum.KICK,
        }
        const snareSampleEntity: Entity = {
            noteSpecs: snarePart,
            timbreName: TimbreNameEnum.SNARE,
        }
        const hihatSampleEntity: Entity = {
            noteSpecs: hihatPart,
            timbreName: TimbreNameEnum.HIHAT,
        }

        return {
            fivePerSampleEntity,
            hihatSampleEntity,
            kickSampleEntity,
            mainDescentContinuationSampleEntity,
            mainDescentSampleEntity,
            sevenPerSampleEntity,
            snareSampleEntity,
            threePerSampleEntity,
        }
    }

export {
    buildSampleEntities,
}
