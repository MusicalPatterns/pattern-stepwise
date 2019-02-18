import { NoteSpec } from '@musical-patterns/compiler'
import { to } from '@musical-patterns/utilities'
import { buildNoteSpec } from '../../../src/indexForTest'

describe('notes', () => {
    it('offsets the index back to zero-indexed of the flat durations scale so that we can write the blocks without thinking too hard', () => {
        const noteSpec: NoteSpec = buildNoteSpec(3)

        expect(noteSpec.durationSpec!.index)
            .toBe(to.Ordinal(2))
    })
})
