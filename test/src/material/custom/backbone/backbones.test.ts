// tslint:disable no-duplicate-string

import { musicalAs } from '@musical-patterns/utilities'
import { computeBackboneStoop } from '../../../../../src/indexForTest'

describe('backbones', () => {
    it('errors for even values', () => {
        expect(() => computeBackboneStoop(musicalAs.Value(2), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 2.')
        expect(() => computeBackboneStoop(musicalAs.Value(6), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 6.')
        expect(() => computeBackboneStoop(musicalAs.Value(10), { minimum: musicalAs.Value(9) }))
            .toThrowError('Cannot compute a backbone stoop for an even value. This value was 10.')
    })
})
