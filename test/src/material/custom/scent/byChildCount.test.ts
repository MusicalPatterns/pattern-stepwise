import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeAscentShapedChildStairs, computeDescentShapedChildStairs } from '../../../../../src/indexForTest'

describe('by child count', () => {
    it('errors for even child counts', () => {
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 2.`)
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 8.`)

        expect(() => computeAscentShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 2.`)
        expect(() => computeAscentShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even child count. This child count was 8.`)
    })

    describe('child count of 1', () => {
        it('works for any odd parent value', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(1), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(3), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(5), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(13), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 13 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(77), { childCount: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 77 ]))
        })
    })

    describe('child count of 3', () => {
        it('works for parent values of 9 + 6n', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(9), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 1, 3, 5 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(15), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 5, 7 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(21), { childCount: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 7, 9 ]))
        })

        it('errors for other odd parent values', () => {
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(7), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 7 and child count 3.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(13), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 13 and child count 3.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(17), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 17 and child count 3.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(23), { childCount: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 23 and child count 3.')
        })
    })

    describe('child count of 5', () => {
        it('works for parent values of 25 + 10n', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(25), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 1, 3, 5, 7, 9 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(35), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(45), { childCount: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })

        it('errors for other odd parent values', () => {
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(23), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 23 and child count 5.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(31), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 31 and child count 5.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(39), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 39 and child count 5.')
            expect(() => computeDescentShapedChildStairs(musicalAs.Value(47), { childCount: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute scent-shaped child stairs for parent value 47 and child count 5.')
        })
    })
})
