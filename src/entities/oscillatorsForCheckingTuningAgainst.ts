import {EntityConfig, TimeType} from '../../../../src/compile/types'
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

const stepwiseMainDescentOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: mainDescentNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: mainDescentContinuationNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseThreePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: threePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseFivePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: fivePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: sevenPerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseNinePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: ninePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseBackboneOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: backboneNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
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
