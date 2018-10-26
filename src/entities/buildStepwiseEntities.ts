import { Entity } from '../../../../src'
import { buildOscillatorsForCheckingTurningAgainstEntities } from './oscillatorsForCheckingTuningAgainst'
import { buildSampleEntities } from './samples'

const buildStepwiseEntities: () => Entity[] =
    (): Entity[] => {
        const {
            stepwiseFivePerEntity,
            stepwiseHihatEntity,
            stepwiseKickEntity,
            stepwiseMainDescentContinuationEntity,
            stepwiseMainDescentEntity,
            stepwiseSevenPerEntity,
            stepwiseSnareEntity,
            stepwiseThreePerEntity,
        } = buildSampleEntities()

        const {
            stepwiseBackboneOscillatorForCheckingTuningAgainstEntity,
            stepwiseFivePerOscillatorForCheckingTuningAgainstEntity,
            stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainstEntity,
            stepwiseMainDescentOscillatorForCheckingTuningAgainstEntity,
            stepwiseSevenPerOscillatorForCheckingTuningAgainstEntity,
            stepwiseThreePerOscillatorForCheckingTuningAgainstEntity,
        } = buildOscillatorsForCheckingTurningAgainstEntities()

        return [
            stepwiseMainDescentOscillatorForCheckingTuningAgainstEntity,
            stepwiseMainDescentContinuationOscillatorForCheckingTuningAgainstEntity,
            stepwiseHihatEntity,
            stepwiseKickEntity,
            stepwiseSnareEntity,
        ]
    }

export {
    buildStepwiseEntities,
}
