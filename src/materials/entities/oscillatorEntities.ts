import { Entity, NoteSpec, TimbreNameEnum } from '@musical-patterns/compiler'
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
        }: DictionaryOf<NoteSpec[]> = buildParts()

        const stepwiseMainDescentOscillatorEntity: Entity = {
            noteSpecs: mainDescentPart,
            timbreName: TimbreNameEnum.SAWTOOTH,
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            noteSpecs: backbonePart,
            timbreName: TimbreNameEnum.SINE,
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
