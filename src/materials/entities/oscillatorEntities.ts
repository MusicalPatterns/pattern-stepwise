import { OscillatorName, VoiceType } from '@musical-patterns/performer'
import { DictionaryOf, Entity, PartSpec } from '../../../../../src'
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
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            partSpec: mainDescentContinuationPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            partSpec: threePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            partSpec: fivePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            partSpec: sevenPerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            partSpec: ninePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            partSpec: backbonePart,
            voiceSpec: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
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
