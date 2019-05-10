// tslint:disable no-duplicate-string

import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeAscentShapedChildStairs, computeDescentShapedChildStairs } from '../../../../../src/indexForTest'

describe('ascents and descents', () => {
    it('errors for even parent values', () => {
        expect(() => computeAscentShapedChildStairs(musicalAs.Value(2), { minChildValue: musicalAs.Value(9) }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 2.')
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(6), { minChildValue: musicalAs.Value(9) }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 6.')

        expect(() => computeAscentShapedChildStairs(musicalAs.Value(2), { childCount: as.Cardinal<Block>(9) }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 2.')
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(6), { childCount: as.Cardinal<Block>(9) }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 6.')

        expect(() => computeAscentShapedChildStairs(musicalAs.Value(2), {
            childCount: as.Cardinal<Block>(9),
            minChildValue: musicalAs.Value(9),
        }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 2.')
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(6), {
            childCount: as.Cardinal<Block>(9),
            minChildValue: musicalAs.Value(9),
        }))
            .toThrowError('Cannot compute scent-shaped child stairs for an even parent value. This parent value was 6.')
    })
})
