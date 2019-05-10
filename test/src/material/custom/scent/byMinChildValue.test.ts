import { as, musicalAs } from '@musical-patterns/utilities'
import { computeAscentShapedChildStairs, computeDescentShapedChildStairs } from '../../../../../src/indexForTest'

describe('by minimum child value', () => {
    it('errors for even minimum child values', () => {
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(2) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 2.`)
        expect(() => computeDescentShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(8) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 8.`)

        expect(() => computeAscentShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(2) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 2.`)
        expect(() => computeAscentShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(8) }))
            .toThrowError(`Cannot compute scent-shaped child stairs with an even minimum child value. This minimum child value was 8.`)
    })

    describe('minimum child value of 1', () => {
        it('works for parent values of n^2, where n is odd', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(1), { minChildValue: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(9), { minChildValue: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1, 3, 5 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(25), { minChildValue: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1, 3, 5, 7, 9 ]))
        })
    })

    describe('minimum child value of 3', () => {
        it('works for parent values of n^2 + 2*n, where n is odd', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(1 + 2), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(9 + 6), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 7 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(25 + 10), { minChildValue: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
        })
    })

    describe('minimum child value of 5', () => {
        it('works for parent values of n^2 + 4*n, where n is odd', () => {
            expect(computeDescentShapedChildStairs(musicalAs.Value(1 + 4), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(9 + 12), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5, 7, 9 ]))
            expect(computeDescentShapedChildStairs(musicalAs.Value(25 + 20), { minChildValue: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })
    })
})
