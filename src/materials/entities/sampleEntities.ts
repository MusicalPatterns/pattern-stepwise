import { Entity, TimbreName } from '@musical-patterns/compiler'
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
            timbreName: TimbreName.TROMBONE,
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreName.TUBA,
        }

        const stepwiseThreePerSampleEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreName.FLUTE,
        }
        const stepwiseFivePerSampleEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreName.VIOLIN,
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreName.TRUMPET,
        }
        const stepwiseNinePerSampleEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreName.CELLO,
        }

        const stepwiseBackboneSampleEntity: Entity = {
            noteSpecs: backbonePart,
            timbreName: TimbreName.PIANO,
        }

        const stepwiseKickSampleEntity: Entity = {
            noteSpecs: kickPart,
            timbreName: TimbreName.KICK,
        }
        const stepwiseSnareSampleEntity: Entity = {
            noteSpecs: snarePart,
            timbreName: TimbreName.SNARE,
        }
        const stepwiseHihatSampleEntity: Entity = {
            noteSpecs: hihatPart,
            timbreName: TimbreName.HIHAT,
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
