import { Note } from '@musical-patterns/compiler'
import { to } from '@musical-patterns/utilities'
import { buildContourElement, buildNote } from '../../../src/indexForTest'

describe('features', () => {
    it('offsets the index back to zero-indexed of the flat durations scale so that we can write the blocks without thinking too hard', () => {
        const note: Note = buildNote(buildContourElement(3))

        expect(note.duration!.index)
            .toBe(to.Ordinal(2))
    })
})
