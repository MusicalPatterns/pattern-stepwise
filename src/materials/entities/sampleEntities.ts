import { Entity, EntityDictionary, SampleName,  TimeType, VoiceType } from '../../../../../src'
import { buildStepwiseParts } from '../parts'

const buildStepwiseSampleEntities: () => EntityDictionary =
    (): EntityDictionary => {
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
        } = buildStepwiseParts()

        const stepwiseMainDescentSampleEntity: Entity = {
            part: mainDescentPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TROMBONE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            part: mainDescentContinuationPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TUBA, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseThreePerSampleEntity: Entity = {
            part: threePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.FLUTE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseFivePerSampleEntity: Entity = {
            part: fivePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.VIOLIN, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            part: sevenPerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TRUMPET, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseNinePerSampleEntity: Entity = {
            part: ninePerPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.CELLO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseBackboneSampleEntity: Entity = {
            part: backbonePart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.PIANO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseKickSampleEntity: Entity = {
            part: kickPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.KICK, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSnareSampleEntity: Entity = {
            part: snarePart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.SNARE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseHihatSampleEntity: Entity = {
            part: hihatPart,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.HIHAT, voiceType: VoiceType.SAMPLE },
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
