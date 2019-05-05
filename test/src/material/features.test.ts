import { Note, PitchValue } from '@musical-patterns/material'
import { as, Pitch, Scalar, Value } from '@musical-patterns/utilities'
import { computeNote } from '../../../src/indexForTest'

describe('features', () => {
    it('offsets the index back to zero-indexed of the flat values scale so that we can write the blocks without thinking too hard', () => {
        const note: Note = computeNote(as.ContourElement<PitchValue>([ 3, 3 ]))

        expect(note.pitch!.index)
            .toBe(as.Ordinal<Array<Scalar<Pitch>>>(2))
        expect(note.value!.index)
            .toBe(as.Ordinal<Array<Scalar<Value>>>(2))
    })
})
