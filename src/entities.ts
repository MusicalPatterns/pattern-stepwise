import { Entities } from '../../../src/compile/types'
import { buildOscillatorsForCheckingTurningAgainstEntities } from './entities/oscillatorsForCheckingTuningAgainst'
import { buildSampleEntities } from './entities/samples'

const buildStepwiseEntities: () => Entities =
    (): Entities => {
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
