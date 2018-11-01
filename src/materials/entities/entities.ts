import { BuildEntitiesFunction, Entity } from '../../../../../src'
import { buildStepwiseOscillatorEntities } from './oscillatorEntities'
import { buildStepwiseSampleEntities } from './sampleEntities'

const buildStepwiseEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            stepwiseFivePerSampleEntity,
            stepwiseHihatSampleEntity,
            stepwiseKickSampleEntity,
            stepwiseMainDescentContinuationSampleEntity,
            stepwiseMainDescentSampleEntity,
            stepwiseSevenPerSampleEntity,
            stepwiseSnareSampleEntity,
            stepwiseThreePerSampleEntity,
        } = buildStepwiseSampleEntities()

        const {
            stepwiseBackboneOscillatorEntity,
            stepwiseFivePerOscillatorEntity,
            stepwiseMainDescentContinuationOscillatorEntity,
            stepwiseMainDescentOscillatorEntity,
            stepwiseSevenPerOscillatorEntity,
            stepwiseThreePerOscillatorEntity,
        } = buildStepwiseOscillatorEntities()

        return [
            stepwiseMainDescentOscillatorEntity,
            stepwiseMainDescentContinuationOscillatorEntity,
            stepwiseBackboneOscillatorEntity,
            stepwiseHihatSampleEntity,
            // stepwiseKickSampleEntity,
            // stepwiseSnareSampleEntity,
        ]
    }

export {
    buildStepwiseEntities,
}
