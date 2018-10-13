import { EntitySpec, TimeType } from '../../../../src/compile/types'
import { subharmonicSeriesScale } from '../../../../src/scales'
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

const stepwiseMainDescent: EntitySpec = {
    notes: mainDescentNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: HALF_LOUD,
    voiceSpec: { timbre: Timbre.TROMBONE, voiceType: VoiceType.SAMPLE },
}
const stepwiseMainDescentContinuation: EntitySpec = {
    notes: mainDescentContinuationNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: Timbre.TUBA, voiceType: VoiceType.SAMPLE },
}

const stepwiseThreePer: EntitySpec = {
    notes: threePerNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: QUARTER_LOUD,
    voiceSpec: { timbre: Timbre.FLUTE, voiceType: VoiceType.SAMPLE },
}
const stepwiseFivePer: EntitySpec = {
    notes: fivePerNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: THIRD_LOUD,
    voiceSpec: { timbre: Timbre.VIOLIN, voiceType: VoiceType.SAMPLE },
}
const stepwiseSevenPer: EntitySpec = {
    notes: sevenPerNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: QUARTER_LOUD,
    voiceSpec: { timbre: Timbre.TRUMPET, voiceType: VoiceType.SAMPLE },
}
const stepwiseNinePer: EntitySpec = {
    notes: ninePerNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: QUARTER_LOUD,
    voiceSpec: { timbre: Timbre.CELLO, voiceType: VoiceType.SAMPLE },
}

const stepwiseBackbone: EntitySpec = {
    notes: backboneNotes,
    timeType: TimeType.ATOMIC,
    voiceGain: ALMOST_SILENT,
    voiceSpec: { timbre: Timbre.PIANO, voiceType: VoiceType.SAMPLE },
}

const stepwiseKick: EntitySpec = {
    notes: kickNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: Timbre.KICK, voiceType: VoiceType.SAMPLE },
}
const stepwiseSnare: EntitySpec = {
    notes: snareNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: Timbre.SNARE, voiceType: VoiceType.SAMPLE },
}
const stepwiseHihat: EntitySpec = {
    notes: hihatNotes,
    timeType: TimeType.ATOMIC,
    voiceSpec: { timbre: Timbre.HIHAT, voiceType: VoiceType.SAMPLE },
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
