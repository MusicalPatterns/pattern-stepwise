import { NoteSpec, NoteSpecsDictionary, sequence } from '../../../src'
import { buildStepwiseContours } from './contours'
import { buildStepwiseNoteSpec, buildUnpitchedStepwiseNoteSpec } from './note'

const buildStepwiseNoteSpecs: () => NoteSpecsDictionary =
    (): NoteSpecsDictionary => {
        const {
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
        } = buildStepwiseContours()

        const mainDescentNoteSpecs: NoteSpec[] = sequence([ mainDescent, mainDescentContinuation ])
            .map(buildStepwiseNoteSpec)
        const mainDescentContinuationNoteSpecs: NoteSpec[] = sequence([ mainDescentContinuation, mainDescent ])
            .map(buildStepwiseNoteSpec)

        const threePerNoteSpecs: NoteSpec[] = sequence([ threePer, ninePer ]).map(buildStepwiseNoteSpec)
        const fivePerNoteSpecs: NoteSpec[] = fivePer.map(buildStepwiseNoteSpec)
        const sevenPerNoteSpecs: NoteSpec[] = sevenPer.map(buildStepwiseNoteSpec)
        const ninePerNoteSpecs: NoteSpec[] = sequence([ ninePer, threePer ]).map(buildStepwiseNoteSpec)

        const backboneNoteSpecs: NoteSpec[] = backbone.map(buildStepwiseNoteSpec)

        const kickNoteSpecs: NoteSpec[] = kick.map(buildUnpitchedStepwiseNoteSpec)
        const snareNoteSpecs: NoteSpec[] = snare.map(buildUnpitchedStepwiseNoteSpec)
        const hihatNoteSpecs: NoteSpec[] = hihat.map(buildUnpitchedStepwiseNoteSpec)

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
