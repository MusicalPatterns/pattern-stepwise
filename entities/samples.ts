import buildEntity from '../../../src/buildEntity'
import buildSampleVoice from '../../../src/buildSampleVoice'
import { subharmonicSeriesPitches } from '../../../src/pitches'
import { Entity } from '../../../src/types'
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

const stepwiseMainDescent: Entity = buildEntity({
    notes: mainDescentNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('trombone'),
    voiceGain: HALF_LOUD,
})

const stepwiseMainDescentContinuation: Entity = buildEntity({
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('tuba'),
})

const stepwiseThreePer: Entity = buildEntity({
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('flute'),
    voiceGain: QUARTER_LOUD,
})

const stepwiseFivePer: Entity = buildEntity({
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('violin'),
    voiceGain: THIRD_LOUD,
})

const stepwiseSevenPer: Entity = buildEntity({
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('trumpet'),
    voiceGain: QUARTER_LOUD,
})

const stepwiseNinePer: Entity = buildEntity({
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('cello'),
    voiceGain: QUARTER_LOUD,
})

const stepwiseBackbone: Entity = buildEntity({
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('piano'),
    voiceGain: ALMOST_SILENT,
})

const stepwiseKick: Entity = buildEntity({
    notes: kickNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('kick'),
})

const stepwiseSnare: Entity = buildEntity({
    notes: snareNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('snare'),
})

const stepwiseHihat: Entity = buildEntity({
    notes: hihatNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildSampleVoice('hihat'),
})

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
