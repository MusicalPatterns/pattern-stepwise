import { Note } from '@musical-patterns/material'
import { as, Scalar } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', () => {
    it('offsets the index back to zero-indexed of the flat durations scale so that we can write the blocks without thinking too hard', () => {
        const note: Note = computeNote(computeContourElement(3))

        expect(note.duration!.index)
            .toBe(as.Ordinal<Scalar>(2))
    })
})
