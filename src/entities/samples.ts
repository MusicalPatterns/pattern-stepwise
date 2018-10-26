import { Entity, EntityDictionary, SampleName,  TimeType, VoiceType } from '../../../../src'
import { buildStepwiseNoteSpecs } from '../notes'

const buildSampleEntities: () => EntityDictionary =
    (): EntityDictionary => {
        const {
            backboneNoteSpecs,
            fivePerNoteSpecs,
            hihatNoteSpecs,
            kickNoteSpecs,
            mainDescentContinuationNoteSpecs,
            mainDescentNoteSpecs,
            ninePerNoteSpecs,
            sevenPerNoteSpecs,
            snareNoteSpecs,
            threePerNoteSpecs,
        } = buildStepwiseNoteSpecs()

        const stepwiseMainDescentEntity: Entity = {
            noteSpecs: mainDescentNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TROMBONE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseMainDescentContinuationEntity: Entity = {
            noteSpecs: mainDescentContinuationNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TUBA, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseThreePerEntity: Entity = {
            noteSpecs: threePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.FLUTE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseFivePerEntity: Entity = {
            noteSpecs: fivePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.VIOLIN, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSevenPerEntity: Entity = {
            noteSpecs: sevenPerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.TRUMPET, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseNinePerEntity: Entity = {
            noteSpecs: ninePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.CELLO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseBackboneEntity: Entity = {
            noteSpecs: backboneNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.PIANO, voiceType: VoiceType.SAMPLE },
        }

        const stepwiseKickEntity: Entity = {
            noteSpecs: kickNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.KICK, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseSnareEntity: Entity = {
            noteSpecs: snareNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.SNARE, voiceType: VoiceType.SAMPLE },
        }
        const stepwiseHihatEntity: Entity = {
            noteSpecs: hihatNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: SampleName.HIHAT, voiceType: VoiceType.SAMPLE },
        }

        return {
            stepwiseFivePerEntity,
            stepwiseHihatEntity,
            stepwiseKickEntity,
            stepwiseMainDescentContinuationEntity,
            stepwiseMainDescentEntity,
            stepwiseSevenPerEntity,
            stepwiseSnareEntity,
            stepwiseThreePerEntity,
        }
    }

export {
    buildSampleEntities,
}
