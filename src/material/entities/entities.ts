// tslint:disable no-dead-store

import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { buildOscillatorEntities } from './oscillatorEntities'
import { buildSampleEntities } from './sampleEntities'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const {
            fivePerSampleEntity,
            hihatSampleEntity,
            kickSampleEntity,
            mainDescentContinuationSampleEntity,
            mainDescentSampleEntity,
            sevenPerSampleEntity,
            snareSampleEntity,
            threePerSampleEntity,
        } = buildSampleEntities()

        const {
            backboneOscillatorEntity,
            fivePerOscillatorEntity,
            mainDescentContinuationOscillatorEntity,
            mainDescentOscillatorEntity,
            sevenPerOscillatorEntity,
            threePerOscillatorEntity,
        } = buildOscillatorEntities()

        return [
            mainDescentOscillatorEntity,
            mainDescentContinuationOscillatorEntity,
            backboneOscillatorEntity,
            hihatSampleEntity,
            snareSampleEntity,
            kickSampleEntity,
        ]
    }

export {
    buildEntities,
}
