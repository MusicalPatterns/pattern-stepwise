import { Entity, PartSpec, TimbreName } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildParts } from '../parts'

const buildStepwiseOscillatorEntities: () => DictionaryOf<Entity> =
    (): DictionaryOf<Entity> => {
        const {
            backbonePart,
            fivePerPart,
            mainDescentContinuationPart,
            mainDescentPart,
            ninePerPart,
            sevenPerPart,
            threePerPart,
        }: DictionaryOf<PartSpec> = buildParts()

        const stepwiseMainDescentOscillatorEntity: Entity = {
            partSpec: mainDescentPart,
            timbreName: TimbreName.SAWTOOTH,
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            partSpec: mainDescentContinuationPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            partSpec: threePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            partSpec: fivePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            partSpec: sevenPerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            partSpec: ninePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            partSpec: backbonePart,
            timbreName: TimbreName.SINE,
        }

        return {
            stepwiseBackboneOscillatorEntity,
            stepwiseFivePerOscillatorEntity,
            stepwiseMainDescentContinuationOscillatorEntity,
            stepwiseMainDescentOscillatorEntity,
            stepwiseNinePerOscillatorEntity,
            stepwiseSevenPerOscillatorEntity,
            stepwiseThreePerOscillatorEntity,
        }
    }

export {
    buildStepwiseOscillatorEntities,
}
