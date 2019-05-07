import { as, Block, musicalAs } from '@musical-patterns/utilities'
import { computeAscentStoop, computeDescentStoop } from '../../../../../src/indexForTest'

describe('by length', () => {
    it('errors for even lengths', () => {
        expect(() => computeDescentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 2.`)
        expect(() => computeDescentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 8.`)

        expect(() => computeAscentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(2) }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 2.`)
        expect(() => computeAscentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(8) }))
            .toThrowError(`Cannot compute a scent stoop with an even length. This length was 8.`)
    })

    describe('length of 1', () => {
        it('works for any odd value', () => {
            expect(computeDescentStoop(musicalAs.Value(1), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 1 ]))
            expect(computeDescentStoop(musicalAs.Value(3), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 3 ]))
            expect(computeDescentStoop(musicalAs.Value(5), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 5 ]))
            expect(computeDescentStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 13 ]))
            expect(computeDescentStoop(musicalAs.Value(77), { length: as.Cardinal<Block>(1) }))
                .toEqual(as.Block([ 77 ]))
        })
    })

    describe('length of 3', () => {
        it('works for values of 9 + 6n', () => {
            expect(computeDescentStoop(musicalAs.Value(9), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 1, 3, 5 ]))
            expect(computeDescentStoop(musicalAs.Value(15), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 3, 5, 7 ]))
            expect(computeDescentStoop(musicalAs.Value(21), { length: as.Cardinal<Block>(3) }))
                .toEqual(as.Block([ 5, 7, 9 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(7), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a scent stoop for value 7 and length 3.')
            expect(() => computeDescentStoop(musicalAs.Value(13), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a scent stoop for value 13 and length 3.')
            expect(() => computeDescentStoop(musicalAs.Value(17), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a scent stoop for value 17 and length 3.')
            expect(() => computeDescentStoop(musicalAs.Value(23), { length: as.Cardinal<Block>(3) }))
                .toThrowError('Cannot compute a scent stoop for value 23 and length 3.')
        })
    })

    describe('length of 5', () => {
        it('works for values of 25 + 10n', () => {
            expect(computeDescentStoop(musicalAs.Value(25), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 1, 3, 5, 7, 9 ]))
            expect(computeDescentStoop(musicalAs.Value(35), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 3, 5, 7, 9, 11 ]))
            expect(computeDescentStoop(musicalAs.Value(45), { length: as.Cardinal<Block>(5) }))
                .toEqual(as.Block([ 5, 7, 9, 11, 13 ]))
        })

        it('errors for other odd values', () => {
            expect(() => computeDescentStoop(musicalAs.Value(23), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a scent stoop for value 23 and length 5.')
            expect(() => computeDescentStoop(musicalAs.Value(31), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a scent stoop for value 31 and length 5.')
            expect(() => computeDescentStoop(musicalAs.Value(39), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a scent stoop for value 39 and length 5.')
            expect(() => computeDescentStoop(musicalAs.Value(47), { length: as.Cardinal<Block>(5) }))
                .toThrowError('Cannot compute a scent stoop for value 47 and length 5.')
        })
    })
})
