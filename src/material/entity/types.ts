import { Entity } from '@musical-patterns/material'

interface StepwiseEntities {
    alpha: Entity,
    beta: Entity,
    fivePer: Entity,
    sevenPer: Entity,
    threePer: Entity,
}

interface OscillatorEntities extends StepwiseEntities {
    ninePer: Entity,
    workout: Entity,
}

interface OnlySampleEntities {
    hihat: Entity,
    kick: Entity,
    snare: Entity,
}

interface SampleEntities extends StepwiseEntities, OnlySampleEntities {
}

export {
    OscillatorEntities,
    SampleEntities,
    OnlySampleEntities,
}
