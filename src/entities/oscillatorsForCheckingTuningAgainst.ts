import { EntitySpec, TimeType } from '../../../../src/compile/types'
import { OscillatorName, VoiceType } from '../../../../src/types'
import {
    backboneNotes,
    fivePerNotes,
    mainDescentContinuationNotes,
    mainDescentNotes,
    ninePerNotes,
    sevenPerNotes,
    threePerNotes,
} from '../notes'

const stepwiseMainDescentOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: mainDescentNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: mainDescentContinuationNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseThreePerOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: threePerNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseFivePerOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: fivePerNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: sevenPerNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseNinePerOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: ninePerNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

const stepwiseBackboneOscillatorForCheckingTuningAgainst: EntitySpec = {
    notes: backboneNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR },
}

export {
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    stepwiseNinePerOscillatorForCheckingTuningAgainst,
    stepwiseBackboneOscillatorForCheckingTuningAgainst,
}
