import { defaultCompileSong } from '../../../src/compile/defaultCompileSong'
import { EntitySpecs } from '../../../src/compile/types'
import { subharmonicSeriesScale } from '../../../src/scales'
import { SongID, SongSpec } from '../../../src/songTypes'
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

const stepwiseSamples: EntitySpecs = [
    stepwiseMainDescent,
    stepwiseMainDescentContinuation,
    stepwiseThreePer,
    stepwiseFivePer,
    stepwiseSevenPer,
    // stepwiseBackbone,
]

const stepwiseOscillatorsForCheckingTuningAgainst: EntitySpecs = [
    stepwiseMainDescentOscillatorForCheckingTuningAgainst,
    stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainst,
    stepwiseThreePerOscillatorForCheckingTuningAgainst,
    stepwiseFivePerOscillatorForCheckingTuningAgainst,
    stepwiseSevenPerOscillatorForCheckingTuningAgainst,
    // stepwiseBackboneOscillatorForCheckingTuningAgainst,
]

const stepwisePercussion: EntitySpecs = [
    stepwiseKick,
    stepwiseSnare,
    stepwiseHihat,
]

const stepwiseSongSpec: SongSpec = {
    compile: defaultCompileSong,
    config: {
        baseFrequency: C8_FOR_STEPWISE,
        durationScalar: to.Scalar(1),
    },
    entitySpecs: sequence([
        stepwiseSamples,
        // stepwiseOscillatorsForCheckingTuningAgainst,
        // stepwisePercussion,
    ]),
    scales: [
        subharmonicSeriesScale,
    ],
    songId: SongID.STEPWISE,
}

export {
    stepwiseSongSpec,
}
