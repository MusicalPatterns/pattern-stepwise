import buildEntity from '../../../src/buildEntity'
import buildVoice from '../../../src/buildVoice'
import { subharmonicSeriesPitches } from '../../../src/pitches'
import { Entity } from '../../../src/types'
import {
    backboneNotes,
    fivePerNotes,
    mainDescentContinuationNotes,
    mainDescentNotes,
    ninePerNotes,
    sevenPerNotes,
    threePerNotes,
} from '../notes'

const stepwiseMainDescentOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: mainDescentNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

const stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: mainDescentContinuationNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('sine'),
})

const stepwiseThreePerOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: threePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

const stepwiseFivePerOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: fivePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

const stepwiseSevenPerOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: sevenPerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

const stepwiseNinePerOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: ninePerNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

const stepwiseBackboneOscillatorForCheckingTuningAgainst: Entity = buildEntity({
    notes: backboneNotes,
    pitches: subharmonicSeriesPitches,
    voice: buildVoice('square'),
})

export {
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    stepwiseNinePerOscillatorForCheckingTuningAgainst,
    stepwiseBackboneOscillatorForCheckingTuningAgainst,
}
