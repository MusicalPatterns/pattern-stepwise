import { Note, Notes } from '../../../src/types'
import sequence from '../../../src/utilities/sequence'
import {
    backbone,
    fivePer,
    hihat,
    kick,
    mainDescent,
    mainDescentContinuation,
    ninePer,
    sevenPer,
    snare,
    threePer,
} from './contours'
import { stepwiseNoteType, unpitchedSampleNoteType } from './noteTypes'

const mainDescentNotes: Notes = sequence([ mainDescent, mainDescentContinuation ]).map(stepwiseNoteType)
const mainDescentContinuationNotes: Notes = sequence([ mainDescentContinuation, mainDescent ]).map(stepwiseNoteType)
const threePerNotes: Notes = sequence([ threePer, ninePer ]).map(stepwiseNoteType)
const fivePerNotes: Notes = fivePer.map(stepwiseNoteType)
const sevenPerNotes: Notes = sevenPer.map(stepwiseNoteType)
const ninePerNotes: Notes = sequence([ ninePer, threePer ]).map(stepwiseNoteType)
const backboneNotes: Notes = backbone.map(stepwiseNoteType)

const kickNotes: Notes = kick.map(unpitchedSampleNoteType)
const snareNotes: Notes = snare.map(unpitchedSampleNoteType)
const hihatNotes: Notes = hihat.map(unpitchedSampleNoteType)

export {
    mainDescentNotes,
    mainDescentContinuationNotes,
    threePerNotes,
    fivePerNotes,
    sevenPerNotes,
    ninePerNotes,
    backboneNotes,
    kickNotes,
    snareNotes,
    hihatNotes,
}
