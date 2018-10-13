import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { EntityConfigs } from '../../../src/compile/types'
import { subharmonicSeriesPitches } from '../../../src/pitches'
import { SongConfig, SongID } from '../../../src/songTypes'
import sequence from '../../../src/utilities/sequence'
import * as to from '../../../src/utilities/to'
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

const stepwiseSamples: EntityConfigs = [
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    // stepwiseBackbone,
]

const stepwiseOscillatorsForCheckingTuningAgainst: EntityConfigs = [
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    // stepwiseBackboneOscillatorForCheckingTuningAgainst,
]

const stepwisePercussion: EntityConfigs = [
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
]

const stepwiseSongConfig: SongConfig = {
    compile: defaultSongCompile,
    config: {
        baseFrequency: C8_FOR_STEPWISE,
        durationScalar: to.Scalar(1),
    },
    entityConfigs: sequence([
        stepwiseSamples,
        // stepwiseOscillatorsForCheckingTuningAgainst,
        // stepwisePercussion,
    ]),
    scales: [
        subharmonicSeriesPitches,
    ],
    songId: SongID.STEPWISE,
}

export {
    stepwiseSongConfig,
}
