import { EntityConfig } from '../../../../src/compile/types'
import { subharmonicSeriesPitches } from '../../../../src/pitches'
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
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SINE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseThreePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseFivePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseNinePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: OscillatorName.SQUARE, voiceType: VoiceType.OSCILLATOR},
}

const stepwiseBackboneOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
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
