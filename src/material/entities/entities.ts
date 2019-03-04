// tslint:disable no-dead-store

import { BuildEntitiesFunction, Entity } from '@musical-patterns/compiler'
import { buildOscillatorEntities } from './oscillatorEntities'
import { buildSampleEntities } from './sampleEntities'
import { OscillatorEntities, SampleEntities } from './types'

const buildEntities: BuildEntitiesFunction =
    (): Entity[] => {
        const sampleEntities: SampleEntities = buildSampleEntities()
        const oscillatorEntities: OscillatorEntities = buildOscillatorEntities()

        return [
            oscillatorEntities.mainDescent,
            oscillatorEntities.mainDescentContinuation,
            oscillatorEntities.backbone,
            oscillatorEntities.threePer,
            oscillatorEntities.fivePer,
            oscillatorEntities.sevenPer,
            oscillatorEntities.ninePer,
            sampleEntities.hihat,
            sampleEntities.snare,
            sampleEntities.kick,
        ]
    }

export {
    buildEntities,
}
