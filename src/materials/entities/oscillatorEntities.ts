import { Entity, NoteSpec, TimbreName } from '@musical-patterns/compiler'
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
            timbreName: TimbreName.SAWTOOTH,
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreName.SQUARE,
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            noteSpecs: backbonePart,
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
