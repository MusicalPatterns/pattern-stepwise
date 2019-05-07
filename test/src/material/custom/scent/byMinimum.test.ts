import { as, musicalAs } from '@musical-patterns/utilities'
import { computeAscentStoop, computeDescentStoop } from '../../../../../src/indexForTest'

describe('by minimum', () => {
    it('errors for even minima', () => {
        expect(() => computeDescentStoop(musicalAs.Value(9), { minimum: musicalAs.Value(2) }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 2.`)
        expect(() => computeDescentStoop(musicalAs.Value(9), { minimum: musicalAs.Value(8) }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 8.`)

        expect(() => computeAscentStoop(musicalAs.Value(9), { minimum: musicalAs.Value(2) }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 2.`)
        expect(() => computeAscentStoop(musicalAs.Value(9), { minimum: musicalAs.Value(8) }))
            .toThrowError(`Cannot compute a scent stoop with an even minimum. This minimum was 8.`)
    })

    describe('minimum of 1', () => {
        it('works for values of n^2, where n is odd', () => {
            expect(computeDescentStoop(musicalAs.Value(1), { minimum: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeDescentStoop(musicalAs.Value(9), { minimum: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1, 3, 5 ]))
            expect(computeDescentStoop(musicalAs.Value(25), { minimum: musicalAs.Value(1) }))
                .toEqual(as.Block([ 1, 3, 5, 7, 9 ]))
        })
    })

    describe('minimum of 3', () => {
        it('works for values of n^2 + 2*n, where n is odd', () => {
            expect(computeDescentStoop(musicalAs.Value(1 + 2), { minimum: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeDescentStoop(musicalAs.Value(9 + 6), { minimum: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 7 ]))
            expect(computeDescentStoop(musicalAs.Value(25 + 10), { minimum: musicalAs.Value(3) }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
        })
    })

    describe('minimum of 5', () => {
        it('works for values of n^2 + 4*n, where n is odd', () => {
            expect(computeDescentStoop(musicalAs.Value(1 + 4), { minimum: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeDescentStoop(musicalAs.Value(9 + 12), { minimum: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5, 7, 9 ]))
            expect(computeDescentStoop(musicalAs.Value(25 + 20), { minimum: musicalAs.Value(5) }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })
    })
})
