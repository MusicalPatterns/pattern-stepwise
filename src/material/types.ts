import { DurationOnly, Note, PitchDuration } from '@musical-patterns/material'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'
import { OnlySampleEntities, OscillatorEntities, SampleEntities } from './entity'

interface StepwiseMaterialSkeleton extends OscillatorEntities, SampleEntities {}

type StepwiseBlocks = KeyMap<StepwiseMaterialSkeleton, Block>

type StepwiseContours = KeyMap<OscillatorEntities, ContourWhole<PitchDuration>>

type StepwiseUnpitchedContours = KeyMap<OnlySampleEntities, ContourWhole<DurationOnly>>

type StepwiseNotes = KeyMap<StepwiseMaterialSkeleton, Note[]>

export {
    StepwiseBlocks,
    StepwiseContours,
    StepwiseUnpitchedContours,
    StepwiseNotes,
}
