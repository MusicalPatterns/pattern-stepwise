import sequence from '../../src/sequence'
import { Note } from '../../src/types'
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

const mainDescentNotes: Note[] = sequence([mainDescent, mainDescentContinuation]).map(stepwiseNoteType)
const mainDescentContinuationNotes: Note[] = sequence([mainDescentContinuation, mainDescent]).map(stepwiseNoteType)
const threePerNotes: Note[] = sequence([threePer, ninePer]).map(stepwiseNoteType)
const fivePerNotes: Note[] = fivePer.map(stepwiseNoteType)
const sevenPerNotes: Note[] = sevenPer.map(stepwiseNoteType)
const ninePerNotes: Note[] = sequence([ninePer, threePer]).map(stepwiseNoteType)
const backboneNotes: Note[] = backbone.map(stepwiseNoteType)

const kickNotes: Note[] = kick.map(unpitchedSampleNoteType)
const snareNotes: Note[] = snare.map(unpitchedSampleNoteType)
const hihatNotes: Note[] = hihat.map(unpitchedSampleNoteType)

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
