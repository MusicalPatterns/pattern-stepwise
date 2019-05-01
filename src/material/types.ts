import { Note, PitchValue, ValueOnly } from '@musical-patterns/material'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'
import { OnlySampleEntities, OscillatorEntities, SampleEntities } from './entity'

interface StepwiseMaterialSkeleton extends OscillatorEntities, SampleEntities {}

type StepwiseBlocks = KeyMap<StepwiseMaterialSkeleton, Block>

type StepwiseContours = KeyMap<OscillatorEntities, ContourWhole<PitchValue>>

type StepwiseUnpitchedContours = KeyMap<OnlySampleEntities, ContourWhole<ValueOnly>>

type StepwiseNotes = KeyMap<StepwiseMaterialSkeleton, Note[]>

export {
    StepwiseBlocks,
    StepwiseContours,
    StepwiseUnpitchedContours,
    StepwiseNotes,
}
