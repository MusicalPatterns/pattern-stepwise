import sequence from '../../src/sequence'
import { Song } from '../../src/types'
import {
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
} from './entities/oscillatorsForCheckingTuningAgainst'
import {
    stepwiseFivePer,
    stepwiseHihat,
    stepwiseKick,
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseSevenPer,
    stepwiseSnare,
    stepwiseThreePer,
} from './entities/samples'

const stepwiseSamples: Song = [
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    // stepwiseBackbone,
]

const stepwiseOscillatorsForCheckingTuningAgainst: Song = [
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    // stepwiseBackboneOscillatorForCheckingTuningAgainst,
]

const stepwisePercussion: Song = [
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
]

const stepwiseSong: Song = sequence([
    stepwiseSamples,
    // stepwiseOscillatorsForCheckingTuningAgainst,
    // stepwisePercussion,
])

export {
    stepwiseSong,
}
