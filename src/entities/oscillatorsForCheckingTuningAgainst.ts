import { EntityConfig } from '../../../../src/compile/types'
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
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: mainDescentContinuationNotes,
    voiceConfig: {timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseThreePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: threePerNotes,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseFivePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: fivePerNotes,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: sevenPerNotes,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseNinePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: ninePerNotes,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseBackboneOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: backboneNotes,
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
