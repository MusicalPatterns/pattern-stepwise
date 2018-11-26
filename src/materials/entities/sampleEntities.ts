import { SampleName, VoiceType } from '@musical-patterns/performer'
import { DictionaryOf } from '@musical-patterns/shared'
import { Entity } from '../../../../../compile'
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
            voiceSpec: { timbre: SampleName.TROMBONE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseMainDescentContinuationSampleEntity: Entity = {
            partSpec: mainDescentContinuationPart,
            voiceSpec: { timbre: SampleName.TUBA, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseThreePerSampleEntity: Entity = {
            partSpec: threePerPart,
            voiceSpec: { timbre: SampleName.FLUTE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseFivePerSampleEntity: Entity = {
            partSpec: fivePerPart,
            voiceSpec: { timbre: SampleName.VIOLIN, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSevenPerSampleEntity: Entity = {
            partSpec: sevenPerPart,
            voiceSpec: { timbre: SampleName.TRUMPET, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseNinePerSampleEntity: Entity = {
            partSpec: ninePerPart,
            voiceSpec: { timbre: SampleName.CELLO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseBackboneSampleEntity: Entity = {
            partSpec: backbonePart,
            voiceSpec: { timbre: SampleName.PIANO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseKickSampleEntity: Entity = {
            partSpec: kickPart,
            voiceSpec: { timbre: SampleName.KICK, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSnareSampleEntity: Entity = {
            partSpec: snarePart,
            voiceSpec: { timbre: SampleName.SNARE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseHihatSampleEntity: Entity = {
            partSpec: hihatPart,
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
