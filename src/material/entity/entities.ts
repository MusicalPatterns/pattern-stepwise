import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { thunkOscillatorEntities } from './oscillatorEntities'
import { thunkSampleEntities } from './sampleEntities'
import { OscillatorEntities, SampleEntities } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const sampleEntities: SampleEntities = thunkSampleEntities()
        const oscillatorEntities: OscillatorEntities = thunkOscillatorEntities()

        return [
            oscillatorEntities.alpha,
            oscillatorEntities.beta,
            oscillatorEntities.workout,
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
