import buildEntity from '../../../../src/compile/buildEntity'
import buildSampleVoice from '../../../../src/compile/buildSampleVoice'
import { subharmonicSeriesPitches } from '../../../../src/pitches'
import { Entity, EntityConfig } from '../../../../src/types'
import {
    backboneNotes,
    fivePerNotes,
    hihatNotes,
    kickNotes,
    mainDescentContinuationNotes,
    mainDescentNotes,
    ninePerNotes,
    sevenPerNotes,
    snareNotes,
    threePerNotes,
} from '../notes'

const HALF_LOUD: number = 0.5
const THIRD_LOUD: number = 0.333
const QUARTER_LOUD: number = 0.25
const ALMOST_SILENT: number = 0.05

const stepwiseMainDescent: EntityConfig = {
    notes: mainDescentNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'trombone', voiceType: 'sample'},
    voiceGain: HALF_LOUD,
}

const stepwiseMainDescentContinuation: EntityConfig = {
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'tuba', voiceType: 'sample'},
}

const stepwiseThreePer: EntityConfig = {
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'flute', voiceType: 'sample'},
    voiceGain: QUARTER_LOUD,
}

const stepwiseFivePer: EntityConfig = {
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'violin', voiceType: 'sample'},
    voiceGain: THIRD_LOUD,
}

const stepwiseSevenPer: EntityConfig = {
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'trumpet', voiceType: 'sample'},
    voiceGain: QUARTER_LOUD,
}

const stepwiseNinePer: EntityConfig = {
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'cello', voiceType: 'sample'},
    voiceGain: QUARTER_LOUD,
}

const stepwiseBackbone: EntityConfig = {
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'piano', voiceType: 'sample'},
    voiceGain: ALMOST_SILENT,
}

const stepwiseKick: EntityConfig = {
    notes: kickNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'kick', voiceType: 'sample'},
}

const stepwiseSnare: EntityConfig = {
    notes: snareNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'snare', voiceType: 'sample'},
}

const stepwiseHihat: EntityConfig = {
    notes: hihatNotes,
    pitches: subharmonicSeriesPitches,
    voiceConfig: {timbre: 'hihat', voiceType: 'sample'},
}

export {
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
}
