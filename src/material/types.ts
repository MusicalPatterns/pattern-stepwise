import { NoteSpec } from '@musical-patterns/compiler'
import { Block, PropertyMap } from '@musical-patterns/utilities'
import { OscillatorEntities, SampleEntities } from './entities'

interface StepwiseMaterialSkeleton extends OscillatorEntities, SampleEntities {}

type StepwiseBlocks = PropertyMap<StepwiseMaterialSkeleton, Block>

type StepwiseParts = PropertyMap<StepwiseMaterialSkeleton, NoteSpec[]>

export {
    StepwiseBlocks,
    StepwiseParts,
}
