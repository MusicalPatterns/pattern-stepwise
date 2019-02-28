import { Entity } from '@musical-patterns/compiler'

interface StepwiseEntities {
    fivePer: Entity,
    mainDescent: Entity,
    mainDescentContinuation: Entity,
    sevenPer: Entity,
    threePer: Entity,
}

interface OscillatorEntities extends StepwiseEntities {
    backbone: Entity,
    ninePer: Entity,
}

interface SampleEntities extends StepwiseEntities {
    hihat: Entity,
    kick: Entity,
    snare: Entity,
}

export {
    OscillatorEntities,
    SampleEntities,
}
