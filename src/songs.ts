import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { EntityConfig } from '../../../src/compile/types'
import { subharmonicSeriesPitches } from '../../../src/pitches'
import { Song, SongName } from '../../../src/songTypes'
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
    compile: defaultSongCompile,
    customConfig: {},
    entityConfigs: sequence([
        stepwiseSamples,
        // stepwiseOscillatorsForCheckingTuningAgainst,
        // stepwisePercussion,
    ]),
    formattedName: 'Stepwise',
    name: SongName.STEPWISE,
    scales: [
        subharmonicSeriesPitches,
    ],
    standardConfig: {
        baseFrequency: C8_FOR_STEPWISE,
    },
}

export {
    stepwise,
}
