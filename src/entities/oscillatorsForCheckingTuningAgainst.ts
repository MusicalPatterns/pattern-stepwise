import { Entity, EntityDictionary, NoteSpecsDictionary, TimeType } from '../../../../src/compile/types'
import { SongSpec } from '../../../../src/songs'
import { OscillatorName, VoiceType } from '../../../../src/types'
import { buildStepwiseNoteSpecs } from '../notes'

const buildOscillatorsForCheckingTurningAgainstEntities: () => EntityDictionary =
    (): EntityDictionary => {
        const {
            backboneNoteSpecs,
            fivePerNoteSpecs,
            mainDescentContinuationNoteSpecs,
            mainDescentNoteSpecs,
            ninePerNoteSpecs,
            sevenPerNoteSpecs,
            threePerNoteSpecs,
        }: NoteSpecsDictionary = buildStepwiseNoteSpecs()

        const stepwiseMainDescentOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: mainDescentNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.TRIANGLE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: mainDescentContinuationNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.TRIANGLE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseThreePerOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: threePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseFivePerOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: fivePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseSevenPerOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: sevenPerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseNinePerOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: ninePerNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        const stepwiseBackboneOscillatorForCheckingTuningAgainstEntity: Entity = {
            noteSpecs: backboneNoteSpecs,
            timeType: TimeType.ATOMIC,
            voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
        }

        return {
            stepwiseBackboneOscillatorForCheckingTuningAgainstEntity,
            stepwiseFivePerOscillatorForCheckingTuningAgainstEntity,
            stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainstEntity,
            stepwiseMainDescentOscillatorForCheckingTuningAgainstEntity,
            stepwiseNinePerOscillatorForCheckingTuningAgainstEntity,
            stepwiseSevenPerOscillatorForCheckingTuningAgainstEntity,
            stepwiseThreePerOscillatorForCheckingTuningAgainstEntity,
        }
    }

export {
    buildOscillatorsForCheckingTurningAgainstEntities,
}
