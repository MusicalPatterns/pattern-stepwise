import { Note, PitchValue, ValueOnly } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole, KeyMap } from '@musical-patterns/utilities'
import { OnlySampleEntities, OscillatorEntities, SampleEntities } from './entity'

interface StepwiseMaterialSkeleton extends OscillatorEntities, SampleEntities {}

type StepwiseBlocks = KeyMap<StepwiseMaterialSkeleton, Block>

type StepwisePieces = KeyMap<OscillatorEntities, ContourPiece<PitchValue>>
type StepwiseUnpitchedPieces = KeyMap<OnlySampleEntities, ContourPiece<ValueOnly>>

type StepwiseWholes = KeyMap<OscillatorEntities, ContourWhole<PitchValue>>
type StepwiseUnpitchedWholes = KeyMap<OnlySampleEntities, ContourWhole<ValueOnly>>

type StepwiseNotes = KeyMap<StepwiseMaterialSkeleton, Note[]>

export {
    StepwiseBlocks,
    StepwiseWholes,
    StepwiseUnpitchedWholes,
    StepwisePieces,
    StepwiseUnpitchedPieces,
    StepwiseNotes,
    StepwiseMaterialSkeleton,
}
