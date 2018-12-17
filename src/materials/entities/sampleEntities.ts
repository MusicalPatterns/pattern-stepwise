import { Entity, TimbreNameEnum } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildParts } from '../parts'

const buildStepwiseSampleEntities: () => DictionaryOf<Entity> =
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

        const stepwiseMainDescentSampleEntity: Entity = {
            noteSpecs: mainDescentPart,
            timbreName: TimbreNameEnum.TROMBONE,
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreNameEnum.TUBA,
        }

        const stepwiseThreePerSampleEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreNameEnum.FLUTE,
        }
        const stepwiseFivePerSampleEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreNameEnum.VIOLIN,
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreNameEnum.TRUMPET,
        }
        const stepwiseNinePerSampleEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreNameEnum.CELLO,
        }

        const stepwiseBackboneSampleEntity: Entity = {
            noteSpecs: backbonePart,
            timbreName: TimbreNameEnum.PIANO,
        }

        const stepwiseKickSampleEntity: Entity = {
            noteSpecs: kickPart,
            timbreName: TimbreNameEnum.KICK,
        }
        const stepwiseSnareSampleEntity: Entity = {
            noteSpecs: snarePart,
            timbreName: TimbreNameEnum.SNARE,
        }
        const stepwiseHihatSampleEntity: Entity = {
            noteSpecs: hihatPart,
            timbreName: TimbreNameEnum.HIHAT,
        }

        return {
            stepwiseFivePerSampleEntity,
            stepwiseHihatSampleEntity,
            stepwiseKickSampleEntity,
            stepwiseMainDescentContinuationSampleEntity,
            stepwiseMainDescentSampleEntity,
            stepwiseSevenPerSampleEntity,
            stepwiseSnareSampleEntity,
            stepwiseThreePerSampleEntity,
        }
    }

export {
    buildStepwiseSampleEntities,
}
