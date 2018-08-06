import { subharmonicSeriesPitches } from '../../../../src/pitches'
import { EntityConfig } from '../../../../src/types'
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
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
}

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'sine', voiceType: 'oscillator'},
}

const stepwiseThreePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
}

const stepwiseFivePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
}

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
}

const stepwiseNinePerOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
}

const stepwiseBackboneOscillatorForCheckingTuningAgainst: EntityConfig = {
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'square', voiceType: 'oscillator'},
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
