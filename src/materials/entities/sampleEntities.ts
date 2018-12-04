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
            partSpec: mainDescentPart,
            timbreName: TimbreName.TROMBONE,
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            partSpec: mainDescentContinuationPart,
            timbreName: TimbreName.TUBA,
        }

        const stepwiseThreePerSampleEntity: Entity = {
            partSpec: threePerPart,
            timbreName: TimbreName.FLUTE,
        }
        const stepwiseFivePerSampleEntity: Entity = {
            partSpec: fivePerPart,
            timbreName: TimbreName.VIOLIN,
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            partSpec: sevenPerPart,
            timbreName: TimbreName.TRUMPET,
        }
        const stepwiseNinePerSampleEntity: Entity = {
            partSpec: ninePerPart,
            timbreName: TimbreName.CELLO,
        }

        const stepwiseBackboneSampleEntity: Entity = {
            partSpec: backbonePart,
            timbreName: TimbreName.PIANO,
        }

        const stepwiseKickSampleEntity: Entity = {
            partSpec: kickPart,
            timbreName: TimbreName.KICK,
        }
        const stepwiseSnareSampleEntity: Entity = {
            partSpec: snarePart,
            timbreName: TimbreName.SNARE,
        }
        const stepwiseHihatSampleEntity: Entity = {
            partSpec: hihatPart,
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
