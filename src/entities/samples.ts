import { EntityConfig, TimeType } from '../../../../src/compile/types'
import { subharmonicSeriesPitches } from '../../../../src/pitches'
import { Timbre, VoiceType } from '../../../../src/types'
import { Scalar } from '../../../../src/utilities/nominalTypes'
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

// tslint:disable-next-line:no-any no-magic-numbers
const HALF_LOUD: Scalar = 0.5 as any
// tslint:disable-next-line:no-any no-magic-numbers
const THIRD_LOUD: Scalar = 0.333 as any
// tslint:disable-next-line:no-any no-magic-numbers
const QUARTER_LOUD: Scalar = 0.25 as any
// tslint:disable-next-line:no-any no-magic-numbers
const ALMOST_SILENT: Scalar = 0.05 as any

const stepwiseMainDescent: EntityConfig = {
    notes: mainDescentNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.TROMBONE, voiceType: VoiceType.SAMPLE},
    voiceGain: HALF_LOUD,
}
const stepwiseMainDescentContinuation: EntityConfig = {
    notes: mainDescentContinuationNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.TUBA, voiceType: VoiceType.SAMPLE},
}

const stepwiseThreePer: EntityConfig = {
    notes: threePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.FLUTE, voiceType: VoiceType.SAMPLE},
    voiceGain: QUARTER_LOUD,
}
const stepwiseFivePer: EntityConfig = {
    notes: fivePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.VIOLIN, voiceType: VoiceType.SAMPLE},
    voiceGain: THIRD_LOUD,
}
const stepwiseSevenPer: EntityConfig = {
    notes: sevenPerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.TRUMPET, voiceType: VoiceType.SAMPLE},
    voiceGain: QUARTER_LOUD,
}
const stepwiseNinePer: EntityConfig = {
    notes: ninePerNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.CELLO, voiceType: VoiceType.SAMPLE},
    voiceGain: QUARTER_LOUD,
}

const stepwiseBackbone: EntityConfig = {
    notes: backboneNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.PIANO, voiceType: VoiceType.SAMPLE},
    voiceGain: ALMOST_SILENT,
}

const stepwiseKick: EntityConfig = {
    notes: kickNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.KICK, voiceType: VoiceType.SAMPLE},
}
const stepwiseSnare: EntityConfig = {
    notes: snareNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.SNARE, voiceType: VoiceType.SAMPLE},
}
const stepwiseHihat: EntityConfig = {
    notes: hihatNotes,
    timeType: TimeType.ATOMIC,
    voiceConfig: {timbre: Timbre.HIHAT, voiceType: VoiceType.SAMPLE},
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
