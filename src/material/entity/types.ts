import { Entity } from '@musical-patterns/material'

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
