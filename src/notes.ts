import { NoteSpec, NoteSpecs, NoteSpecsDictionary } from '../../../src/compile/types'
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
import { buildStepwiseNoteSpec, buildUnpitchedStepwiseNoteSpec } from './note'

const buildStepwiseNoteSpecs: () => NoteSpecsDictionary =
    (): NoteSpecsDictionary => {
        const mainDescentNoteSpecs: NoteSpecs = sequence([ mainDescent, mainDescentContinuation ])
            .map(buildStepwiseNoteSpec)
        const mainDescentContinuationNoteSpecs: NoteSpecs = sequence([ mainDescentContinuation, mainDescent ])
            .map(buildStepwiseNoteSpec)

        const threePerNoteSpecs: NoteSpecs = sequence([ threePer, ninePer ]).map(buildStepwiseNoteSpec)
        const fivePerNoteSpecs: NoteSpecs = fivePer.map(buildStepwiseNoteSpec)
        const sevenPerNoteSpecs: NoteSpecs = sevenPer.map(buildStepwiseNoteSpec)
        const ninePerNoteSpecs: NoteSpecs = sequence([ ninePer, threePer ]).map(buildStepwiseNoteSpec)

        const backboneNoteSpecs: NoteSpecs = backbone.map(buildStepwiseNoteSpec)

        const kickNoteSpecs: NoteSpecs = kick.map(buildUnpitchedStepwiseNoteSpec)
        const snareNoteSpecs: NoteSpecs = snare.map(buildUnpitchedStepwiseNoteSpec)
        const hihatNoteSpecs: NoteSpecs = hihat.map(buildUnpitchedStepwiseNoteSpec)

        return {
            backboneNoteSpecs,
            fivePerNoteSpecs,
            hihatNoteSpecs,
            kickNoteSpecs,
            mainDescentContinuationNoteSpecs,
            mainDescentNoteSpecs,
            ninePerNoteSpecs,
            sevenPerNoteSpecs,
            snareNoteSpecs,
            threePerNoteSpecs,
        }
    }

export {
    buildStepwiseNoteSpecs,
}
