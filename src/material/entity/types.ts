import { Entity } from '@musical-patterns/material'
import { ObjectOf } from '@musical-patterns/utilities'

interface StepwiseEntities {
    alpha: Entity,
    beta: Entity,
    fivePer: Entity,
    sevenPer: Entity,
    threePer: Entity,
}

interface OscillatorEntities extends StepwiseEntities, ObjectOf<Entity> {
    ninePer: Entity,
    workout: Entity,
}

interface OnlySampleEntities extends ObjectOf<Entity> {
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
