import {
    Entity,
    EntityDictionary,
    OscillatorName,
    PartDictionary,
    TimeType,
    VoiceType,
} from '../../../../../src'
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
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SAWTOOTH, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseMainDescentContinuationOscillatorEntity: Entity = {
            part: mainDescentContinuationPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseThreePerOscillatorEntity: Entity = {
            part: threePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseFivePerOscillatorEntity: Entity = {
            part: fivePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseSevenPerOscillatorEntity: Entity = {
            part: sevenPerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseNinePerOscillatorEntity: Entity = {
            part: ninePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseBackboneOscillatorEntity: Entity = {
            part: backbonePart,
            timeType: TimeType.ATOMIC,
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
