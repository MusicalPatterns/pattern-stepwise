import { NoteSpec } from '@musical-patterns/compiler'
import { DurationOnly, PitchDuration } from '@musical-patterns/pattern'
import { Block, ContourWhole, PropertyMap } from '@musical-patterns/utilities'
import { OnlySampleEntities, OscillatorEntities, SampleEntities } from './entities'

interface StepwiseMaterialSkeleton extends OscillatorEntities, SampleEntities {}

type StepwiseBlocks = PropertyMap<StepwiseMaterialSkeleton, Block>

type StepwiseContours = PropertyMap<OscillatorEntities, ContourWhole<PitchDuration>>

type StepwiseUnpitchedContours = PropertyMap<OnlySampleEntities, ContourWhole<DurationOnly>>

type StepwiseParts = PropertyMap<StepwiseMaterialSkeleton, NoteSpec[]>

export {
    StepwiseBlocks,
    StepwiseContours,
    StepwiseUnpitchedContours,
    StepwiseParts,
}
