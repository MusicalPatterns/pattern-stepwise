// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeAscentStoop, computeDescentStoop } from '../../../../../src/indexForTest'

describe('ascents and descents', () => {
    it('errors for even values', () => {
        expect(() => computeAscentStoop(musicalAs.Value(2), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 2.')
        expect(() => computeDescentStoop(musicalAs.Value(6), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 6.')

        expect(() => computeAscentStoop(musicalAs.Value(2), { length: as.Cardinal<Block>(9) }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 2.')
        expect(() => computeDescentStoop(musicalAs.Value(6), { length: as.Cardinal<Block>(9) }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 6.')

        expect(() => computeAscentStoop(musicalAs.Value(2), {
            length: as.Cardinal<Block>(9),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 2.')
        expect(() => computeDescentStoop(musicalAs.Value(6), {
            length: as.Cardinal<Block>(9),
            minimum: musicalAs.Value(9),
        }))
            .toThrowError('Cannot compute a scent stoop for an even value. This value was 6.')
    })
})
