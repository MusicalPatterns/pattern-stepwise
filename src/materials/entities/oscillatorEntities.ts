import { OscillatorName, VoiceType } from '@musical-patterns/performer'
import { Entity, EntityDictionary, PartDictionary } from '../../../../../src'
import { buildParts } from '../parts'

const buildStepwiseOscillatorEntities: () => EntityDictionary =
    (): EntityDictionary => {
        const {
            backbonePart,
            fivePerPart,
            mainDescentContinuationPart,
            mainDescentPart,
            ninePerPart,
            sevenPerPart,
            threePerPart,
        }: PartDictionary = buildParts()

        const stepwiseMainDescentOscillatorEntity: Entity = {
            part: mainDescentPart,
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            part: mainDescentContinuationPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            part: threePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            part: fivePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            part: sevenPerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            part: ninePerPart,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            part: backbonePart,
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
