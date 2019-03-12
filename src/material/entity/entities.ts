// tslint:disable no-dead-store

import { Entity, MaterializeEntities } from '@musical-patterns/compiler'
import { computeOscillatorEntities } from './oscillatorEntities'
import { computeSampleEntities } from './sampleEntities'
import { OscillatorEntities, SampleEntities } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const sampleEntities: SampleEntities = computeSampleEntities()
        const oscillatorEntities: OscillatorEntities = computeOscillatorEntities()

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
    materializeEntities,
}
