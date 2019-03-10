import { Note } from '@musical-patterns/compiler'
import { DurationOnly, PitchDuration } from '@musical-patterns/pattern'
import { Block, ContourWhole, KeyMap } from '@musical-patterns/utilities'
import { OnlySampleEntities, OscillatorEntities, SampleEntities } from './entities'

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
