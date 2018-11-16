import { SampleName, VoiceType } from '@musical-patterns/performer'
import { Entity, EntityDictionary } from '../../../../../src'
import { buildParts } from '../parts'

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
        } = buildParts()

        const stepwiseMainDescentSampleEntity: Entity = {
            part: mainDescentPart,
            voiceSpec: { timbre: SampleName.TROMBONE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            part: mainDescentContinuationPart,
            voiceSpec: { timbre: SampleName.TUBA, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseThreePerSampleEntity: Entity = {
            part: threePerPart,
            voiceSpec: { timbre: SampleName.FLUTE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseFivePerSampleEntity: Entity = {
            part: fivePerPart,
            voiceSpec: { timbre: SampleName.VIOLIN, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            part: sevenPerPart,
            voiceSpec: { timbre: SampleName.TRUMPET, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseNinePerSampleEntity: Entity = {
            part: ninePerPart,
            voiceSpec: { timbre: SampleName.CELLO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseBackboneSampleEntity: Entity = {
            part: backbonePart,
            voiceSpec: { timbre: SampleName.PIANO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseKickSampleEntity: Entity = {
            part: kickPart,
            voiceSpec: { timbre: SampleName.KICK, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSnareSampleEntity: Entity = {
            part: snarePart,
            voiceSpec: { timbre: SampleName.SNARE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseHihatSampleEntity: Entity = {
            part: hihatPart,
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
