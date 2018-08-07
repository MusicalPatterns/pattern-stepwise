import { EntityConfig, Song } from '../../../src/types'
import sequence from '../../../src/utilities/sequence'
import { C8_FOR_STEPWISE } from './basePitch'
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

const stepwiseSamples: EntityConfig[] = [
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    // stepwiseBackbone,
]

const stepwiseOscillatorsForCheckingTuningAgainst: EntityConfig[] = [
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    // stepwiseBackboneOscillatorForCheckingTuningAgainst,
]

const stepwisePercussion: EntityConfig[] = [
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
]

const stepwise: Song = {
    basePitch: C8_FOR_STEPWISE,
    entityConfigs: sequence([
        stepwiseSamples,
        // stepwiseOscillatorsForCheckingTuningAgainst,
        // stepwisePercussion,
    ]),
}

export {
    stepwise,
}
