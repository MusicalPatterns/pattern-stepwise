import { Note } from '@musical-patterns/material'
import { as, Scalar, Value } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', () => {
    it('offsets the index back to zero-indexed of the flat values scale so that we can write the blocks without thinking too hard', () => {
        const note: Note = computeNote(computeContourElement(3))

        expect(note.value!.index)
            .toBe(as.Ordinal<Array<Scalar<Value>>>(2))
    })
})
